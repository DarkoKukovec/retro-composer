/* eslint-disable react/jsx-no-bind */
import { css } from 'emotion';
import * as React from 'react';

import { parseNotes, serializeNotes } from '../services/inputParser';
import { Keyboard } from '../components/Keyboard';
import { Player } from '../components/Player';
import { ISong } from '../interfaces/ISong';
import { useHistory } from 'react-router-dom';
import { PRIMARY_TEXT_COLOR, PRIMARY_COLOR } from '../consts/colors';

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

const activeStyle = css`
  background: ${PRIMARY_TEXT_COLOR};
  outline: 1px solid ${PRIMARY_TEXT_COLOR};
  color: ${PRIMARY_COLOR};
  /* display: inline-block; */
  height: 1em;

  &:empty {
    margin-bottom: -4px;
  }
`;

export const Song: React.FC<{
  song: Partial<ISong>;
  onSave(song: Partial<ISong>, data: Partial<ISong>): string;
  history: { goBack(): void };
}> = ({ song, onSave, history }) => {
  const [notes, setNotes] = React.useState(serializeNotes(song.notes || []));
  const selection = React.useRef<Selection | null>();
  const selectionOffset = React.useRef<number>(0);
  const input = React.useRef<HTMLDivElement | null>();
  const [active, setActive] = React.useState(-1);
  const [parsed, setParsed] = React.useState(song.notes || []);
  const [name, setName] = React.useState(song.name || '');
  const [tempo, setTempo] = React.useState(song.tempo || 100);
  const onNotesChange = (rawNotes: string) => {
    selection.current = window.getSelection();
    selectionOffset.current = selection.current?.focusOffset || 0;
    setNotes(rawNotes);
    setParsed(parseNotes(rawNotes));
    window.requestAnimationFrame(() => {
      if (input.current && selection.current) {
        const range = document.createRange();
        range.setStart(input.current, Math.min(selectionOffset.current, input.current.childNodes.length));
        range.collapse(true);
        selection.current.removeAllRanges();
        selection.current.addRange(range);
        // ((input.current as unknown) as HTMLInputElement).setSelectionRange(
        //   selection.current.focusOffset,
        //   selection.current.focusOffset,
        // );
      }
    });
  };
  const timer = React.useRef<NodeJS.Timeout>();
  const onNoteInput = React.useCallback((rawNotes: string) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      onNotesChange(rawNotes);
    }, 500);
  }, []);
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

  const setActiveNote = React.useCallback(
    (index: number) => {
      setActive(index);
    },
    [setActive],
  );

  let notesHtml = notes
    .split(/\s+/g)
    .map((note, index) => `<span class="${index === active ? activeStyle : ''}">${note}</span>`)
    .join(' ');

  notesHtml = `<span class="${active === -1 ? activeStyle : ''}"></span>${notesHtml}<span class="${
    active === parsed.length ? activeStyle : ''
  }"></span>`;

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
      <div
        ref={input as any}
        contentEditable
        className={inputStyle}
        onInput={(e: React.ChangeEvent<HTMLDivElement>) => onNoteInput(e.target.innerText)}
        dangerouslySetInnerHTML={{ __html: notesHtml }}
      />
      <Player notes={parsed} onTempoChange={onTempoChange} tempo={tempo} name={name} setActiveNote={setActiveNote} />
      <Keyboard activeIndex={active} setActiveNote={setActiveNote} notes={parsed} onNotesChange={onNotesChange} />
    </div>
  );
};
