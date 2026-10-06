import * as React from 'react';
import { start } from 'tone';

import { INoteRecord } from '../interfaces/INoteRecord';
import { createAudio, downloadAudio } from '../services/audio';

export const Player: React.FC<{
  notes: Array<INoteRecord>;
  tempo: number;
  name?: string;
  onTempoChange(value: number): void;
  setActiveNote(index: number): void;
}> = ({ notes, tempo, name, onTempoChange, setActiveNote }) => {
  const audio = React.useMemo(
    () => (notes.length ? createAudio(notes, tempo, setActiveNote) : null),
    [notes, tempo, setActiveNote],
  );

  React.useEffect(() => {
    return () => {
      audio?.stop();
    };
  }, [audio]);

  const onPlay = () => {
    if (audio) {
      void start().catch(() => undefined);
      audio.stop();
      audio.start();
    }
  };

  const onStop = () => {
    audio?.stop();
  };

  const onDownload = () => {
    downloadAudio(notes, tempo, name, setActiveNote);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTempoChange(parseInt(e.target.value, 10) || 100);
  };

  return (
    <div className="flex px-1 pt-2 text-xl leading-6">
      <button type="button" onClick={onPlay}>
        Play
      </button>
      <button type="button" onClick={onStop}>
        Stop
      </button>
      <button type="button" onClick={onDownload}>
        Download
      </button>
      <div className="flex-1" />
      Tempo:
      <input className="w-[50px]" type="number" value={tempo} onChange={onChange} />
    </div>
  );
};
