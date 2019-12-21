import { INoteRecord } from '../interfaces/INoteRecord';

const Tone = require('tone');

let lastSequence: any;

export function createAudio(notes: Array<INoteRecord>, tempo: number) {
  Tone.Transport.bpm.value = tempo;
  if (lastSequence) {
    lastSequence.stop();
  }
  const synth = new Tone.Synth().toMaster();
  let nextTone = 0;

  const parts: Array<[number, [string, number]]> = [];
  notes.forEach((note) => {
    const duration = Tone.Time(`${note.duration}n`) * (note.extendedLength ? 1.5 : 1);
    if ('tone' in note) {
      const tone = `${note.tone.toUpperCase()}${2 + note.octave}`;
      parts.push([nextTone, [tone, duration]]);
    }
    nextTone += duration;
  });

  const sequence = (lastSequence = new Tone.Part((time: number, [tone, duration]: [string, number]) => {
    synth.triggerAttackRelease(tone, duration, time);
  }, parts));

  sequence.loop = false;
  sequence.playbackRate = 1;

  Tone.Transport.start();

  return sequence;
}
