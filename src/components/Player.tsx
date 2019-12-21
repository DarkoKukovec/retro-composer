import { css } from 'emotion';
import * as React from 'react';

import { INoteRecord } from '../interfaces/INoteRecord';
import { createAudio } from '../services/audio';

const mainStyle = css`
  font-size: 20px;
  padding: 4px;
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
  onTempoChange(value: number): void;
}> = ({ notes, tempo, onTempoChange }) => {
  const audio = React.useMemo(() => (notes.length ? createAudio(notes, tempo) : null), [notes, tempo]);

  React.useEffect(() => {
    return () => {
      if (audio) {
        audio.stop();
      }
    };
  }, [audio]);

  const onPlay = () => {
    if (audio) {
      audio.stop();
      audio.start();
    }
  };

  const onStop = () => {
    if (audio) {
      audio.stop();
    }
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
      <div className={separatorStyle} />
      Tempo:
      <input className={tempoInputStyle} type="number" value={tempo} onChange={onChange} />
    </div>
  );
};
