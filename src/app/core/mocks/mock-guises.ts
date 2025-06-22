import { Guise } from '../../models/guise.model';
import { MOCK_GUISE_EFFECTS } from './mock-effects';

export const MOCK_GUISES: Guise[] = [
  {
    id: 101,
    title: 'Zeus',
    avatarUrl: 'assets/commanders/Zeus.png',
    miniAvatarUrl: 'assets/commanders/Zeus_mini.png',
    availableStock: 10,
    stock: 41,
    type: 'GENERAL',
    guiseEffects: MOCK_GUISE_EFFECTS
  },
  {
    id: 102,
    title: 'Poseidon',
    avatarUrl: 'assets/commanders/Poseidon.png',
    miniAvatarUrl: 'assets/commanders/Poseidon_mini.png',
    availableStock: 24,
    stock: 41,
    type: 'GENERAL',
    guiseEffects: MOCK_GUISE_EFFECTS
  },
  {
    id: 103,
    title: 'Athena',
    avatarUrl: 'assets/commanders/Athena.png',
    miniAvatarUrl: 'assets/commanders/Athena_mini.png',
    availableStock: 11,
    stock: 41,
    type: 'GENERAL',
    guiseEffects: MOCK_GUISE_EFFECTS
  },
  {
    id: 104,
    title: 'Alexander Gromov',
    avatarUrl: 'assets/commanders/AlexanderGromov.png',
    miniAvatarUrl: 'assets/commanders/AlexanderGromov_mini.png',
    availableStock: 31,
    stock: 41,
    type: 'GENERAL',
    guiseEffects: MOCK_GUISE_EFFECTS
  },
  {
    id: 105,
    title: 'Angela Lutti',
    avatarUrl: 'assets/commanders/AngelaLutti.png',
    miniAvatarUrl: 'assets/commanders/AngelaLutti_mini.png',
    availableStock: 40,
    stock: 41,
    type: 'GENERAL',
    guiseEffects: MOCK_GUISE_EFFECTS
  },
  {
    id: 106,
    title: 'Baradun',
    avatarUrl: 'assets/commanders/PCWO009_Baradun_2x.png',
    miniAvatarUrl: 'assets/commanders/Baradun_mini.png',
    availableStock: 2,
    stock: 41,
    type: 'GENERAL',
    guiseEffects: MOCK_GUISE_EFFECTS
  },
  {
    id: 107,
    title: 'Blacksmith',
    avatarUrl: 'assets/commanders/Blacksmith.png',
    miniAvatarUrl: 'assets/commanders/Blacksmith_mini.png',
    availableStock: 5,
    stock: 41,
    type: 'NATIONAL',
    guiseEffects: MOCK_GUISE_EFFECTS
  },
  {
    id: 108,
    title: 'Farmer',
    avatarUrl: 'assets/commanders/Farmer.png',
    miniAvatarUrl: 'assets/commanders/Farmer_mini.png',
    availableStock: 6,
    stock: 41,
    type: 'NATIONAL',
    guiseEffects: MOCK_GUISE_EFFECTS
  }
];
