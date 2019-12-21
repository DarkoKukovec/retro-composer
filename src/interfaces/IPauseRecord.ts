import { NoteLength } from '../enums/NoteLength';

export interface IPauseRecort {
  duration: NoteLength;
  extendedLength: boolean;
  rest: boolean;
}
