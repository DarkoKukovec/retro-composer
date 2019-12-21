import { css } from 'emotion';
import * as React from 'react';

import { PRIMARY_TEXT_COLOR } from '../consts/colors';
import { parseNotes } from '../services/inputParser';
import { Player } from '../components/Player';

const SAMPLE_SONG =
  '4- 8- 16b2 16a2 4b2 4e2 4- 8- 16c3 16b2 8c3 8b2 4a2 4- 8- 16c3 16b2 4c3 4e2 4- 8- 16a2 16g2 8a2 8g2 8#f2 8a2 4g2 8- 16#f2 16g2 4a2 8- 16g2 16a2 8b2 8a2 8g2 8#f2 4e2 4c3 2b2 4- 16b2 16c3 16b2 16a2 1b2';

const mainStyle = css`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const inputStyle = css`
  border: none;
  background: transparent;
  width: calc(100% - 32px);
  font-size: 24px;
  outline: none;
  color: ${PRIMARY_TEXT_COLOR};
  font-family: VT323, monospace;
  padding: 16px;
  flex: 1;
`;

const parsedStyle = css`
  overflow: auto;
  max-height: 500px;
  padding: 0;
  margin: 0;
`;

export const InputContainer = () => {
  const [parsed, setParsed] = React.useState(parseNotes(SAMPLE_SONG));
  const onChange = (e: any) => setParsed(parseNotes(e.target.value));

  return (
    <div className={mainStyle}>
      <textarea className={inputStyle} defaultValue={SAMPLE_SONG} onChange={onChange}></textarea>
      <Player notes={parsed} />
      <pre className={parsedStyle}>{JSON.stringify(parsed, null, 2)}</pre>
    </div>
  );
};
