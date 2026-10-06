import * as React from 'react';
import { HashRouter, Route, Routes, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PRESETS } from '../consts/presets';
import { Tone } from '../enums/Tone';
import { ISong } from '../interfaces/ISong';
import { parseNotes } from '../services/inputParser';
import { Song } from './Song';
import { SongList } from './SongList';

const saved: Array<ISong> | null = JSON.parse(localStorage.getItem('saved-songs') || 'null');
const presets = saved
  ? saved.map((s) => ({ ...s, notes: s.notes.map((n) => ('tone' in n ? { ...n, tone: n.tone[0] as Tone } : n)) }))
  : PRESETS.map((preset) => ({ ...preset, notes: parseNotes(preset.notes) }));

export const App = () => {
  const [songs, setSongs] = React.useState(presets);

  const onSaveClick = (song: Partial<ISong>, data: Partial<ISong>): string => {
    if (songs.includes(song as ISong)) {
      Object.assign(song, data);
      return song.id as string;
    } else {
      const id = uuidv4();
      const newSongList: Array<ISong> = [...songs, { name: 'Undefined', ...data, id } as ISong];
      localStorage.setItem('saved-songs', JSON.stringify(newSongList));
      setSongs(newSongList);
      return id;
    }
  };

  return (
    <div className="flex h-full flex-col">
      <Header />
      <main className="flex-1 bg-[#79a682] font-['VT323',monospace] text-xl text-[#242d23]">
        <HashRouter>
          <Routes>
            <Route path="/" element={<SongList songs={songs} />} />
            <Route path="/:id" element={<SongRoute songs={songs} onSave={onSaveClick} />} />
          </Routes>
        </HashRouter>
      </main>
      <Footer />
    </div>
  );
};

const SongRoute = ({
  songs,
  onSave,
}: {
  songs: Array<ISong>;
  onSave: (song: Partial<ISong>, data: Partial<ISong>) => string;
}) => {
  const { id } = useParams<{ id: string }>();
  const song = songs.find((item) => item.id === id) || {};
  return <Song song={song} onSave={onSave} />;
};
