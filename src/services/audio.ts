import { NoteLength } from '../enums/NoteLength';
import { INoteRecord } from '../interfaces/INoteRecord';

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
  const context = Tone.context;
  const dest = context.createMediaStreamDestination();
  // @ts-ignore
  const mediaRecorder = new MediaRecorder(dest.stream);
  // @ts-ignore
  const type = types.find((item) => MediaRecorder.isTypeSupported(item.mime));

  if (!type) {
    return;
  }

  const { audio, synth } = generateAudio(
    [...notes, { duration: NoteLength.Eighth, extendedLength: false, rest: false }],
    tempo,
    (index: number) => {
      console.log('note', index);
      if (onNoteChange) {
        onNoteChange(index);
      }
      if (index === 0) {
        mediaRecorder.start();
      }
    },
    () => {
      console.log('stop');
      Tone.Transport.stop();
      mediaRecorder.stop();
    },
  );

  synth.toDestination();
  synth.connect(dest);
  const chunks: Array<any> = [];

  mediaRecorder.onstop = () => {
    // Make blob out of our blobs, and open it.
    var blob = new Blob(chunks, { type: type.mime });
    const url = URL.createObjectURL(blob);
    console.log('onstop', url);
    // window.location.href = url;
    // window.open(url);
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', `${name || 'ringtone'}.${type.ext}`);
    document.body.appendChild(a);
    a.click();
  };

  mediaRecorder.ondataavailable = (evt: any) => {
    // push each chunk (blobs) in an array
    console.log('on chunk');
    chunks.push(evt.data);
  };

  console.log('start', mediaRecorder, dest.stream);
  // mediaRecorder.start();
  Tone.Transport.start();
  audio.start();
}
