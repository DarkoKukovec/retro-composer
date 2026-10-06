import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Keyboard } from '../components/Keyboard';
import { Player } from '../components/Player';
import { ISong } from '../interfaces/ISong';
import { parseNotes, serializeNotes } from '../services/inputParser';

const activeStyle = 'h-[1em] bg-[#242d23] text-[#79a682] outline outline-1 outline-[#242d23] empty:-mb-1';

export const Song: React.FC<{
  song: Partial<ISong>;
  onSave(song: Partial<ISong>, data: Partial<ISong>): string;
}> = ({ song, onSave }) => {
  const [notes, setNotes] = React.useState(serializeNotes(song.notes || []));
  const selection = React.useRef<Selection | null>(null);
  const selectionOffset = React.useRef<number>(0);
  const input = React.useRef<HTMLDivElement | null>(null);
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
        selection.current.removeAllRanges();
        selection.current.addRange(range);
      }
    });
  };
  const timer = React.useRef<number | undefined>(undefined);
  const onNoteInput = React.useCallback((rawNotes: string) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      onNotesChange(rawNotes);
    }, 500);
  }, []);
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const navigate = useNavigate();
  const onSaveClick = () => {
    const id = onSave(song, {
      name,
      tempo,
      notes: parsed,
    });

    if (id !== song.id) {
      navigate(`/${id}`);
    }
  };

  const onBackClick = () => {
    navigate(-1);
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
    <div className="flex h-full flex-col">
      <div className="flex px-1 pt-2 leading-6">
        <button type="button" onClick={onBackClick}>
          Back
        </button>
        <input className="flex-1 text-center text-2xl" value={name} onChange={onNameChange} placeholder="Song name" />
        <button type="button" onClick={onSaveClick}>
          Save
        </button>
      </div>
      <div
        ref={input}
        contentEditable
        className="flex-1 p-4 text-2xl"
        onInput={(e: React.FormEvent<HTMLDivElement>) => onNoteInput(e.currentTarget.innerText)}
        dangerouslySetInnerHTML={{ __html: notesHtml }}
      />
      <Player notes={parsed} onTempoChange={setTempo} tempo={tempo} name={name} setActiveNote={setActiveNote} />
      <Keyboard activeIndex={active} setActiveNote={setActiveNote} notes={parsed} onNotesChange={onNotesChange} />
    </div>
  );
};
