import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    commentCounter: (state) => {
      state.value += 1;
    },
  },
});

export const { commentCounter } = CommentSlice.actions;
export const selectCount = (state) => state.comment.value;

export default CommentSlice.reducer;
