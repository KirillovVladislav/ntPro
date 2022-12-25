import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import archive from './archive/archiveSlice';
export const store = configureStore({
  reducer: {
    archive,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
