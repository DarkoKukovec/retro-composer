/* eslint-disable react/jsx-no-bind */
import { css } from 'emotion';
import * as React from 'react';
import { SECONDARY_COLOR } from '../consts/colors';
import { INoteRecord } from '../interfaces/INoteRecord';
import { serializeNotes } from '../services/inputParser';

const DURATIONS = [32, 16, 8, 4, 2, 1];
const DEFAULT_DURATION = 8;
const DEFAULT_OCTAVE = 2;
const TONES = { 1: 'c', 2: 'd', 3: 'e', 4: 'f', 5: 'g', 6: 'a', 7: 'b' };

const mainStyle = css`
  width: 100%;
  height: 230px;
  background: ${SECONDARY_COLOR};
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  padding: 8px 0;

  button {
    background: linear-gradient(#f0f2e8, #787b7c);
    color: #000;
    border-radius: 8px;
    font-size: 28px;
    font-family: Quicksand, sans-serif;

    &:hover {
      background: linear-gradient(#c0c2c8, #787b7c);
      color: #000;
    }

    &:active {
      background: linear-gradient(#787b7c, #f0f2e8);
      color: #000;
    }
  }
`;

enum Key {
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Star,
  Hash,
  Left,
  Right,
  C,
}

const Button: React.FC<{ keyVal: Key; children: any; onPress(key: Key, long: boolean): void }> = ({
  keyVal,
  children,
  onPress,
}) => {
  const [timer, setTimer] = React.useState();

  const onMouseUp = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
      onPress(keyVal, false);
    }
  };

  const onMouseOut = () => {
    clearTimeout(timer);
    setTimer(null);
  };

  const onLongPress = () => {
    onPress(keyVal, true);
    setTimer(null);
  };

  const onMouseDown = () => {
    setTimer(setTimeout(onLongPress, 400));
  };

  return (
    <button
      type="button"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseOut={onMouseOut}
      onBlur={onMouseOut}
      onMouseLeave={onMouseOut}
    >
      {children}
    </button>
  );
};

const KEYS = { '*': Key.Star, '#': Key.Hash };

let presses: Array<Key> = [];
let timer: number | null = null;

export const Keyboard: React.FC<{
  notes: Array<INoteRecord>;
  activeIndex: number;
  setActiveNote(index: number): void;
  onNotesChange(notes: string): void;
}> = ({ notes, activeIndex, setActiveNote, onNotesChange }) => {
  if (presses.length) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = (setTimeout(() => {
      onKeyPress(presses.shift() as Key, false);
    }, 100) as unknown) as number;
  }
  const onKeyPress = (key: Key, long: boolean) => {
    if (navigator && navigator.vibrate) {
      navigator.vibrate(50);
    }
    if (key === Key.Star && long) {
      presses =
        prompt()
          ?.split(' ')
          .map((k: string) => ((KEYS as any)[k] as Key) || (parseInt(k, 10) as Key)) || [];
      onKeyPress(presses.shift() as Key, false);
      return;
    }
    const activeNote = notes[activeIndex];
    if (key === Key.Left) {
      if (activeIndex > -1) {
        setActiveNote(activeIndex - 1);
      }
    } else if (key === Key.Right) {
      if (activeIndex < notes.length) {
        setActiveNote(activeIndex + 1);
      }
    } else if (key === Key.C) {
      if (activeIndex === notes.length) {
        onNotesChange(serializeNotes(notes.slice(0, -1)));
        setActiveNote(activeIndex - 1);
      } else if (activeIndex !== -1) {
        const newNotes = notes.slice();
        newNotes.splice(activeIndex, 1);
        onNotesChange(serializeNotes(newNotes));
      }
    } else if (key === Key.Eight) {
      if (activeNote) {
        const newNotes = notes.slice();
        const durationIndex = DURATIONS.indexOf(activeNote.duration);
        newNotes.splice(activeIndex, 1, {
          ...activeNote,
          duration: DURATIONS[Math.max(0, durationIndex - 1)],
        });
        onNotesChange(serializeNotes(newNotes));
      }
    } else if (key === Key.Nine) {
      if (activeNote) {
        const newNotes = notes.slice();
        const durationIndex = DURATIONS.indexOf(activeNote.duration);
        newNotes.splice(activeIndex, 1, {
          ...activeNote,
          duration: DURATIONS[Math.min(DURATIONS.length - 1, durationIndex + 1)],
        });
        onNotesChange(serializeNotes(newNotes));
      }
    } else if (key === Key.Hash) {
      if (activeNote && 'sharp' in activeNote && activeNote.tone !== 'b' && activeNote.tone !== 'e') {
        const newNotes = notes.slice();
        newNotes.splice(activeIndex, 1, {
          ...activeNote,
          sharp: !activeNote.sharp,
        });
        onNotesChange(serializeNotes(newNotes));
      }
    } else if (key === Key.Star) {
      if (activeNote && 'sharp' in activeNote) {
        const newNotes = notes.slice();
        newNotes.splice(activeIndex, 1, {
          ...activeNote,
          octave: ((activeNote.octave + 3) % 3) + 1,
        });
        onNotesChange(serializeNotes(newNotes));
      }
    } else {
      const newNote: Partial<INoteRecord> = {
        duration: DEFAULT_DURATION,
      };
      if (key === Key.Zero) {
        Object.assign(newNote, { rest: true });
      } else {
        Object.assign(newNote, {
          extendedLength: long,
          octave: activeNote && 'octave' in activeNote ? activeNote.octave : DEFAULT_OCTAVE,
          tone: TONES[key],
        });
      }
      if (activeIndex === -1) {
        onNotesChange(serializeNotes([newNote as INoteRecord, ...notes]));
        setActiveNote(0);
      } else if (!activeNote) {
        onNotesChange(serializeNotes([...notes, newNote as INoteRecord]));
      } else {
        const newNotes = notes.slice();
        newNotes.splice(activeIndex + 1, 0, newNote as INoteRecord);
        onNotesChange(serializeNotes(newNotes));
        setActiveNote(activeIndex + 1);
      }
    }
  };

  return (
    <div className={mainStyle}>
      <Button keyVal={Key.Left} onPress={onKeyPress}>
        ←
      </Button>
      <Button keyVal={Key.C} onPress={onKeyPress}>
        C
      </Button>
      <Button keyVal={Key.Right} onPress={onKeyPress}>
        →
      </Button>
      <Button keyVal={Key.One} onPress={onKeyPress}>
        1
      </Button>
      <Button keyVal={Key.Two} onPress={onKeyPress}>
        2
      </Button>
      <Button keyVal={Key.Three} onPress={onKeyPress}>
        3
      </Button>
      <Button keyVal={Key.Four} onPress={onKeyPress}>
        4
      </Button>
      <Button keyVal={Key.Five} onPress={onKeyPress}>
        5
      </Button>
      <Button keyVal={Key.Six} onPress={onKeyPress}>
        6
      </Button>
      <Button keyVal={Key.Seven} onPress={onKeyPress}>
        7
      </Button>
      <Button keyVal={Key.Eight} onPress={onKeyPress}>
        8
      </Button>
      <Button keyVal={Key.Nine} onPress={onKeyPress}>
        9
      </Button>
      <Button keyVal={Key.Star} onPress={onKeyPress}>
        *
      </Button>
      <Button keyVal={Key.Zero} onPress={onKeyPress}>
        0
      </Button>
      <Button keyVal={Key.Hash} onPress={onKeyPress}>
        #
      </Button>
    </div>
  );
};
