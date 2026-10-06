import { Link } from 'react-router-dom';

export const SongList: React.FC<{
  songs: Array<{ id: string; name: string }>;
}> = ({ songs }) => {
  const linkStyle =
    'block cursor-pointer p-1.5 text-2xl no-underline text-[#242d23] hover:bg-[#242d23] hover:text-[#79a682]';
  return (
    <ul className="m-0 p-1 list-none">
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
