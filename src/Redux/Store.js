import { configureStore } from '@reduxjs/toolkit';
import CommentSlice from './reducers/CommentSlice';

export const store = configureStore({
  reducer: {
      comment:CommentSlice
  },
})