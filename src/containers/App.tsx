/* eslint-disable react/jsx-no-bind */
import { css } from 'emotion';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from '../consts/colors';
import { Song } from './Song';
import { PRESETS } from '../consts/presets';
import { parseNotes } from '../services/inputParser';
import { ISong } from '../interfaces/ISong';
import { SongList } from './SongList';

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const mainStyle = css`
  flex: 1;
  background: ${PRIMARY_COLOR};
  color: ${PRIMARY_TEXT_COLOR};
  font-size: 20px;
  font-family: VT323, monospace;
`;

const saved: Array<ISong> | null = JSON.parse(localStorage.getItem('saved-songs') || 'null');
const presets = saved || PRESETS.map((preset) => ({ ...preset, notes: parseNotes(preset.notes) }));

export const App = () => {
  const [songs, setSongs] = React.useState(presets);

  const onSaveClick = (song: Partial<ISong>, data: Partial<ISong>): string => {
    if (songs.includes(song as ISong)) {
      Object.assign(song, data);
      return song.id as string;
    } else {
      const id = uuidv1();
      const newSongList: Array<ISong> = [...songs, { name: 'Undefined', ...data, id } as ISong];
      localStorage.setItem('saved-songs', JSON.stringify(newSongList));
      setSongs(newSongList);
      return id;
    }
  };

  return (
    <div className={layoutStyle}>
      <Header />
      <main className={mainStyle}>
        <BrowserRouter>
          <Route path="/" exact render={() => <SongList songs={songs} />} />
          <Route
            path="/:id"
            render={(props) => {
              const song = songs.find((item) => item.id === props.match.params.id) || {};
              return <Song {...props} song={song} onSave={onSaveClick} />;
            }}
          />
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
};
