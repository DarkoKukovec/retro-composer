import { css } from 'emotion';
import * as React from 'react';

import { INoteRecord } from '../interfaces/INoteRecord';
import { createAudio } from '../services/audio';

const mainStyle = css`
  font-size: 20px;
  padding: 4px;
`;

export const Player: React.FC<{
  notes: Array<INoteRecord>;
  tempo: number;
}> = ({ notes, tempo }) => {
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

  return (
    <div className={mainStyle}>
      <button type="button" onClick={onPlay}>
        Play
      </button>
      <button type="button" onClick={onStop}>
        Stop
      </button>
    </div>
  );
};
