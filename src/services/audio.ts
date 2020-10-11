import { NoteLength } from '../enums/NoteLength';
import { INoteRecord } from '../interfaces/INoteRecord';
import { saveAs } from 'file-saver';

const Tone = require('tone');

const types = [
  { mime: 'audio/ogg;codecs=opus', ext: 'ogg' },
  { mime: 'audio/ogg;codecs=vorbis', ext: 'ogg' },
  { mime: 'audio/webm;codecs=opus', ext: 'webm' },
  { mime: 'audio/webm;codecs=vorbis', ext: 'webm' },
];

let lastSequence: any;

function generateAudio(
  notes: Array<INoteRecord>,
  tempo: number,
  onNoteChange?: (index: number) => void,
  onEnd?: () => void,
) {
  Tone.Transport.bpm.value = tempo;
  if (lastSequence) {
    lastSequence.stop();
  }
  const synth = new Tone.Synth();

  let nextTone = 0;

  const parts: Array<[number, [string, number, number]?]> = [];

  notes.forEach((note, index) => {
    const duration = Tone.Time(`${note.duration}n`);
    if ('tone' in note) {
      const tone = `${note.tone.toUpperCase()}${note.sharp ? '#' : ''}${2 + note.octave}`;
      parts.push([nextTone, [tone, duration, index]]);
    } else {
      parts.push([nextTone, ['', duration, index]]);
    }
    nextTone += duration * (note.extendedLength ? 1.5 : 1);
  });

  const sequence = (lastSequence = new Tone.Part((time: number, [tone, duration, index]: [string, number, number]) => {
    if (tone) {
      synth.triggerAttackRelease(tone, duration, time);
      // } else if (onEnd) {
      //   onEnd();
    }
    if (index === notes.length - 1 && onEnd) {
      onEnd();
    }
    if (onNoteChange) {
      onNoteChange(index);
    }
  }, parts));

  sequence.loop = false;
  sequence.playbackRate = 1;

  return { synth, audio: sequence };
}

export function createAudio(notes: Array<INoteRecord>, tempo: number, setActiveNote?: (index: number) => void) {
  const { synth, audio } = generateAudio(notes, tempo, setActiveNote);

  synth.toDestination();
  Tone.Transport.start();

  return audio;
}

export function downloadAudio(
  notes: Array<INoteRecord>,
  tempo: number,
  name?: string,
  onNoteChange?: (index: number) => void,
) {
  if (!('MediaRecorder' in window)) {
    if (navigator.vendor === 'Apple Computer, Inc.') {
      if (navigator.platform === 'MacIntel') {
        alert(
          '[Safari Experimental] To download, enable the "Develop" menu in Safari Advanced settings and then enable the "MediaRecorder" option in Develop > Experimental Features menu',
        );
      } else {
        alert(
          '[Safari Experimental] To download, enable the "MediaRecorder" option in Safari settings: Advanced > Experimental Features menu',
        );
      }
    } else {
      alert('The MediaRecorder feature is not supported in this browser :(');
    }
    return;
  }
  const context = Tone.context;
  const dest = context.createMediaStreamDestination();
  // @ts-ignore
  const mediaRecorder = new MediaRecorder(dest.stream);
  const type = types.find(
    // @ts-ignore
    (item) => (MediaRecorder && MediaRecorder.isTypeSupported ? MediaRecorder.isTypeSupported(item.mime) : true),
  );

  if (!type) {
    alert('No known file type support');
    return;
  }

  const { audio, synth } = generateAudio(
    [...notes, { duration: NoteLength.Eighth, extendedLength: false, rest: false }],
    tempo,
    (index: number) => {
      if (onNoteChange) {
        onNoteChange(index);
      }
      if (index === 0) {
        mediaRecorder.start();
      }
    },
    () => {
      Tone.Transport.stop();
      mediaRecorder.stop();
    },
  );

  synth.toDestination();
  synth.connect(dest);
  const chunks: Array<any> = [];

  mediaRecorder.onstop = () => {
    var blob = new Blob(chunks, { type: type.mime });
    saveAs(blob, `${name || 'ringtone'}.${type.ext}`);
  };

  mediaRecorder.ondataavailable = (evt: any) => {
    chunks.push(evt.data);
  };

  Tone.Transport.start();
  audio.start();
}
