import { css } from 'emotion';
import * as React from 'react';

import { parseNotes, serializeNotes } from '../services/inputParser';
import { Player } from '../components/Player';
import { ISong } from '../interfaces/ISong';
import { useHistory } from 'react-router-dom';

const mainStyle = css`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const inputStyle = css`
  width: calc(100% - 32px);
  font-size: 24px;
  padding: 16px;
  flex: 1;
`;

const toolbarStyle = css`
  display: flex;
  padding: 8px 4px 0;
  line-height: 24px;
`;

const nameStyle = css`
  flex: 1;
  font-size: 24px;
  text-align: center;
`;

export const Song: React.FC<{
  song: Partial<ISong>;
  onSave(song: Partial<ISong>, data: Partial<ISong>): string;
  history: { goBack(): void };
}> = ({ song, onSave, history }) => {
  const [parsed, setParsed] = React.useState(song.notes || []);
  const [name, setName] = React.useState(song.name || '');
  const [tempo, setTempo] = React.useState(song.tempo || 100);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setParsed(parseNotes(e.target.value));
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onTempoChange = (value: number) => setTempo(value);
  const historyInstance = useHistory();
  const onSaveClick = () => {
    const id = onSave(song, {
      name,
      tempo,
      notes: parsed,
    });

    if (id !== song.id) {
      historyInstance.replace(`/${id}`);
    }
  };

  const onBackClick = () => {
    history.goBack();
  };
  const defaultValue = serializeNotes(song.notes || []);

  return (
    <div className={mainStyle}>
      <div className={toolbarStyle}>
        <button type="button" onClick={onBackClick}>
          Back
        </button>
        <input className={nameStyle} value={name} onChange={onNameChange} placeholder="Song name" />
        <button type="button" onClick={onSaveClick}>
          Save
        </button>
      </div>
      <textarea className={inputStyle} defaultValue={defaultValue} onChange={onChange}></textarea>
      <Player notes={parsed} onTempoChange={onTempoChange} tempo={tempo} />
    </div>
  );
};
