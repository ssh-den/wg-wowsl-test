import { GuiseEffect } from "../../models/guise-effect.model";

export const MOCK_GUISE_EFFECTS: GuiseEffect[] = [
  {
    id: 1,
    title: 'Signal Flare',
    description: 'Use the horn to launch a signal flare in battle',
    iconUrl: '/assets/effects/horn.png'
  },
  {
    id: 2,
    title: 'Legendary Skill Effect',
    description: 'Add a visual effect for legendary skill activation in battle',
    iconUrl: '/assets/effects/legendary.png'
  },
  {
    id: 3,
    title: 'Tinted Tracers',
    description: 'Add tinted shell tracers',
    iconUrl: '/assets/effects/tracer.png'
  },
  {
    id: 4,
    title: 'Voiceover',
    description: 'Add unique voiceover',
    iconUrl: '/assets/effects/voiceover.png'
  }
];
