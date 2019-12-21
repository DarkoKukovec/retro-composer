import { css } from 'emotion';
import * as React from 'react';

import { PRIMARY_TEXT_COLOR } from '../consts/colors';
import { parseNotes } from '../services/inputParser';

const SAMPLE_SONG =
  '2- 16a1 16- 16a1 16- 8a1 16- 4a2 16g2 16- 2g2 16- 4- 8- 16g2 16- 16g2 16- 16g2 8g2 16- 4c2 16#a1 16- 4a2 8g2 4f2 4g2 8d2 8f2 16- 16f2 16- 16c2 8c2 16- 4a2 8g2 16f2 16- 8f2 16- 16c2 16- 4g2 4f2';

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
      <pre className={parsedStyle}>{JSON.stringify(parsed, null, 2)}</pre>
    </div>
  );
};
