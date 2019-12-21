import { INoteRecord } from '../interfaces/INoteRecord';

const Tone = require('tone');

let lastSequence: any;

export function createAudio(notes: Array<INoteRecord>, tempo: number, setActiveNote: (index: number) => void) {
  Tone.Transport.bpm.value = tempo;
  if (lastSequence) {
    lastSequence.stop();
  }
  const synth = new Tone.Synth().toMaster();
  let nextTone = 0;

  const parts: Array<[number, [string, number, number]?]> = [];
  notes.forEach((note, index) => {
    const duration = Tone.Time(`${note.duration}n`);
    if ('tone' in note) {
      const tone = `${note.tone.toUpperCase()}${2 + note.octave}`;
      parts.push([nextTone, [tone, duration, index]]);
    } else {
      parts.push([nextTone, ['', duration, index]]);
    }
    nextTone += duration * (note.extendedLength ? 1.5 : 1);
  });

  const sequence = (lastSequence = new Tone.Part((time: number, [tone, duration, index]: [string, number, number]) => {
    if (tone) {
      synth.triggerAttackRelease(tone, duration, time);
    }
    setActiveNote(index);
  }, parts));

  sequence.loop = false;
  sequence.playbackRate = 1;

  Tone.Transport.start();

  return sequence;
}
