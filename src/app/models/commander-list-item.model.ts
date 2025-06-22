import { GuiseEffect } from "./guise-effect.model";

export interface CommanderListItem {
  id: number;
  title: string;
  avatarUrl: string;
  miniAvatarUrl: string;
  availableStock: number;
  stock: number;
  type: 'COMMANDER' | 'GENERAL' | 'NATIONAL';
  guiseEffects?: GuiseEffect[];
  isLegendary?: boolean;
  rank?: number;
}