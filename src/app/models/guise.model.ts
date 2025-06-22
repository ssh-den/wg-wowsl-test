import { GuiseEffect } from './guise-effect.model';

export interface Guise {
  id: number;
  title: string;
  avatarUrl: string;
  miniAvatarUrl: string;
  availableStock: number;
  stock: number;
  type: 'GENERAL' | 'NATIONAL';
  guiseEffects: GuiseEffect[];
}