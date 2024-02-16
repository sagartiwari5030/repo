// import { configureStore } from '@reduxjs/toolkit';

// import { netwonCoreApi } from './services/netwonCoreApi';
// import playerReducer from './features/playerSlice';

// export const store = configureStore({
//   reducer: {
//     [netwonCoreApi.reducerPath]: netwonCoreApi.reducer,
//     player: playerReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(netwonCoreApi.middleware),
// });

import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    // Add other slices or reducers as needed
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
