import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setAudioVolume } from 'store/slices/player.slices';

export const useAudeoVolume = () => {
  const dispatch = useAppDispatch();
  const { volume } = useAppSelector((store) => store.player);

  const setVolume = (volume: number) => {
    dispatch(setAudioVolume(volume));
  };
  return { volume, setVolume };
};
