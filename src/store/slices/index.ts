import { overlaySlice } from './overlay.slices';
import { playerSlice } from './player.slices';
import { userSlice } from './user.slices';
import { programGuideSlices } from './program-guide.slices';

export const reducerSlices = {
  [overlaySlice.name]: overlaySlice.reducer,
  [playerSlice.name]: playerSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [programGuideSlices.name]: programGuideSlices.reducer,
};
