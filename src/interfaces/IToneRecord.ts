import { NoteLength } from '../enums/NoteLength';
import { Tone } from '../enums/Tone';

export interface IToneRecort {
  duration: NoteLength;
  extendedLength: boolean;
  sharp: boolean;
  tone: Tone;
  octave: number;
}
