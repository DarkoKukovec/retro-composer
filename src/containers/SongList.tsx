/* eslint-disable react/jsx-no-bind */
import * as React from 'react';
import { Link } from 'react-router-dom';

import { ISong } from '../interfaces/ISong';
import { css } from 'emotion';
import { PRIMARY_TEXT_COLOR, PRIMARY_COLOR } from '../consts/colors';

const listStyle = css`
  margin: 0;
  padding: 4px;
  list-style: none;
`;

const linkStyle = css`
  font-size: 24px;
  cursor: pointer;
  padding: 6px;
  text-decoration: none;
  display: block;
  color: ${PRIMARY_TEXT_COLOR};

  &:hover {
    background: ${PRIMARY_TEXT_COLOR};
    color: ${PRIMARY_COLOR};
  }
`;

export const SongList: React.FC<{
  songs: Array<ISong>;
}> = ({ songs }) => {
  return (
    <ul className={listStyle}>
      {songs.map((song) => (
        <li key={song.name}>
          <Link className={linkStyle} to={`/${song.id}`}>
            {song.name}
          </Link>
        </li>
      ))}
      <li>
        <Link className={linkStyle} to="/new">
          + New song
        </Link>
        <a
          className={linkStyle}
          href="https://nokia.nigelcoldwell.co.uk/tunes.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          + Need ideas?
        </a>
      </li>
    </ul>
  );
};
