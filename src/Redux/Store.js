import { configureStore } from '@reduxjs/toolkit';
import CommentSlice from './reducers/CommentSlice';
import MemorySlice from './reducers/MemorySlice';

export const store = configureStore({
  reducer: {
      comment:CommentSlice,
      memory:MemorySlice
  },
})