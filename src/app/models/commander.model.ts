import { Guise } from './guise.model';

export interface Commander {
  id: number;
  title: string;
  rank: number;
  isLegendary: boolean;
  avatarUrl: string;
  miniAvatarUrl: string;
  availableStock: number;
  stock: number;
  guises: Guise[];
}
