import useSound from 'use-sound';

// Using lightweight, royalty-free UI sounds
const HOVER_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'; // Light tap/click
const CLICK_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'; // Defined pop

export const useSoundEffects = () => {
  const [playHover] = useSound(HOVER_SOUND_URL, { volume: 0.2 });
  const [playClick] = useSound(CLICK_SOUND_URL, { volume: 0.3 });

  return { playHover, playClick };
};
