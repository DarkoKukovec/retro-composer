import { INoteRecord } from './INoteRecord';

export interface ISong {
  id: string;
  name: string;
  tempo: number;
  notes: Array<INoteRecord>;
}
