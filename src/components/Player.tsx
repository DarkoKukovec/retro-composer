import { css } from 'emotion';
import * as React from 'react';

import { INoteRecord } from '../interfaces/INoteRecord';
import { createAudio, downloadAudio } from '../services/audio';

const ToneLib = require('tone');

const mainStyle = css`
  font-size: 20px;
  padding: 8px 4px;
  display: flex;
  line-height: 24px;
`;

const separatorStyle = css`
  flex: 1;
`;

const tempoInputStyle = css`
  width: 50px;
`;

export const Player: React.FC<{
  notes: Array<INoteRecord>;
  tempo: number;
  name?: string;
  onTempoChange(value: number): void;
  setActiveNote(index: number): void;
}> = ({ notes, tempo, name, onTempoChange, setActiveNote }) => {
  const audio = React.useMemo(() => (notes.length ? createAudio(notes, tempo, setActiveNote) : null), [
    notes,
    tempo,
    setActiveNote,
  ]);

  React.useEffect(() => {
    return () => {
      if (audio) {
        audio.stop();
      }
    };
  }, [audio]);

  const onPlay = () => {
    if (audio) {
      ToneLib.start();
      audio.stop();
      audio.start();
    }
  };

  const onStop = () => {
    if (audio) {
      audio.stop();
    }
  };

  const onDownload = () => {
    downloadAudio(notes, tempo, name, setActiveNote);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTempo = parseInt(e.target.value, 10) || 100;
    onTempoChange(newTempo);
  };

  return (
    <div className={mainStyle}>
      <button type="button" onClick={onPlay}>
        Play
      </button>
      <button type="button" onClick={onStop}>
        Stop
      </button>
      {'MediaRecorder' in window && (
        <button type="button" onClick={onDownload}>
          Download
        </button>
      )}
      <div className={separatorStyle} />
      Tempo:
      <input className={tempoInputStyle} type="number" value={tempo} onChange={onChange} />
    </div>
  );
};
