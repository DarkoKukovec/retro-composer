import * as React from 'react';

import { INoteRecord } from '../interfaces/INoteRecord';
import { serializeNotes } from '../services/inputParser';

const DURATIONS = [32, 16, 8, 4, 2, 1];
const DEFAULT_DURATION = 8;
const DEFAULT_OCTAVE = 2;
const TONES = { 1: 'c', 2: 'd', 3: 'e', 4: 'f', 5: 'g', 6: 'a', 7: 'b' };
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

const Button: React.FC<{ keyVal: Key; children: React.ReactNode; onPress(key: Key, long: boolean): void }> = ({
  keyVal,
  children,
  onPress,
}) => {
  const timer = React.useRef<number | undefined>(undefined);

  const onMouseUp = () => {
    if (timer.current !== undefined) {
      clearTimeout(timer.current);
      timer.current = undefined;
      onPress(keyVal, false);
    }
  };

  const onMouseOut = () => {
    if (timer.current !== undefined) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }
  };

  const onLongPress = () => {
    onPress(keyVal, true);
    timer.current = undefined;
  };

  const onMouseDown = () => {
    timer.current = setTimeout(onLongPress, 400);
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

const KEYS = {
  '*': Key.Star,
  '#': Key.Hash,
};

export const Keyboard: React.FC<{
  notes: Array<INoteRecord>;
  activeIndex: number;
  setActiveNote(index: number): void;
  onNotesChange(notes: string): void;
}> = ({ notes, activeIndex, setActiveNote, onNotesChange }) => {
  const presses = React.useRef<Array<Key>>([]);
  const keyTimer = React.useRef<number | undefined>(undefined);

  const onKeyPress = (key: Key, long: boolean) => {
    if (navigator && navigator.vibrate) {
      navigator.vibrate(50);
    }
    if (key === Key.Star && long) {
      presses.current =
        prompt()
          ?.split(' ')
          .map((k: string) => KEYS[k as keyof typeof KEYS] ?? (parseInt(k, 10) as Key)) ?? [];
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

  // Star long-press keys are queued in presses; each note is drained 100 ms
  // after the last render so it sees the notes state updated by the previous
  // one. Runs on every render, mirroring the pre-migration render-phase timer.
  React.useEffect(() => {
    if (presses.current.length === 0) {
      return;
    }
    clearTimeout(keyTimer.current);
    keyTimer.current = setTimeout(() => {
      const k = presses.current.shift();
      if (k !== undefined) {
        onKeyPress(k, false);
      }
    }, 100);
  });

  return (
    <div id="keyboard" className="grid h-[230px] w-full grid-cols-3 gap-2 bg-[#2B303D] py-2 z-[1]">
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
