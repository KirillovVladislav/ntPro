import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArchiveSliceState, TArchiveItem } from './types';

const initialState: ArchiveSliceState = {
  items: [],
};

const archiveSlice = createSlice({
  name: 'archive',
  initialState,
  reducers: {
    addArchiveItem(state, action: PayloadAction<TArchiveItem>) {
      state.items.push(action.payload);
    },
  },
});

export const { addArchiveItem } = archiveSlice.actions;

export default archiveSlice.reducer;
