import { Commander } from '../../models/commander.model';
import { MOCK_GUISES } from './mock-guises';

export const MOCK_COMMANDER: Commander = {
  id: 1,
  title: 'Henk Pröpper',
  rank: 16,
  isLegendary: true,
  avatarUrl: 'assets/commanders/HenkPropper.png',
  miniAvatarUrl: 'assets/commanders/HenkPropper_mini.png',
  availableStock: 1,
  stock: 41,
  guises: MOCK_GUISES
};
