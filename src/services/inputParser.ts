import { NOTE_REGEX } from '../consts/regex';
import { INoteRecord } from '../interfaces/INoteRecord';
import { Tone } from '../enums/Tone';

export function parseNotes(notes: string): Array<INoteRecord> {
  return notes
    .split(/\s+/g)
    .map((note) => note.match(NOTE_REGEX))
    .filter((note) => note !== null)
    .map(([_match, duration, extendedLength, sharp, tone, octave, pauseDuration, extendedPauseLength, rest]: any) =>
      duration
        ? {
            duration: parseInt(duration, 10),
            extendedLength: Boolean(extendedLength),
            sharp: Boolean(sharp),
            tone: tone as Tone,
            octave: parseInt(octave, 10),
          }
        : {
            duration: parseInt(pauseDuration, 10),
            extendedLength: Boolean(extendedPauseLength),
            rest: Boolean(rest),
          },
    );
}

export function serializeNotes(notes: Array<INoteRecord>): string {
  return notes
    .map((note) =>
      'tone' in note
        ? `${note.duration}${note.extendedLength ? '.' : ''}${note.sharp ? '#' : ''}${note.tone}${note.octave}`
        : `${note.duration}${note.extendedLength ? '.' : ''}-`,
    )
    .join(' ');
}
