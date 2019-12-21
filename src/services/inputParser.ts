import { NOTE_REGEX } from '../consts/regex';

export enum NoteLength {
  Half = 2,
  Quarter = 4,
  Eighth = 8,
  Sixteenth = 16,
  Thirtyseconth = 32,
}

export enum Tone {
  A = 'a',
  ASharp = '#a',
  B = 'b',
  C = 'c',
  CSharp = '#c',
  D = 'd',
  DSharp = '#d',
  E = 'e',
  F = 'f',
  FSharp = '#f',
  G = 'f',
  GSharp = '#g',
}

export enum Octave {
  One = 1,
  Two = 2,
  Three = 3,
}

export type Length = { duration: NoteLength; extended: boolean };

interface IToneRecort {
  duration: NoteLength;
  extendedLength: boolean;
  sharp: boolean;
  tone: Tone;
  octave: number;
}

interface IPauseRecort {
  duration: NoteLength;
  extendedLength: boolean;
  rest: boolean;
}

export type INoteRecord = IToneRecort | IPauseRecort;

export function parseNotes(notes: string): Array<INoteRecord> {
  return notes
    .split(/\s+/g)
    .map((note) => note.match(NOTE_REGEX))
    .filter((note) => note !== null)
    .map(([_match, duration, extendedLength, sharp, tone, octave, pauseDuration, extendedPauseLength, rest]: any) =>
      duration
        ? ({
            duration: parseInt(duration, 10),
            extendedLength: Boolean(extendedLength),
            sharp: Boolean(sharp),
            tone: `${sharp || ''}${tone}`,
            octave: parseInt(octave, 10),
          } as IToneRecort)
        : ({
            duration: parseInt(pauseDuration, 10),
            extendedLength: Boolean(extendedPauseLength),
            rest: Boolean(rest),
          } as IPauseRecort),
    );
}
