import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    all: [
        {
            author: "test author 1",
            title: "Title test 1",
            body: "Body blah blah",
            likedBy: [1, 2, 3],
            categories: ["Blockchain", "AI"],
            comments: [1, 2, 10],
        },
        {
            author: "test author 2",
            title: "Title test 2",
            body: "Body blah blah 2",
            likedBy: [1, 2, 3],
            categories: ["Healthcare", "AI"],
            comments: [1, 2, 11],
        },
    ],
    curr: {},
  },
  reducers: {
    createPost(state, action) {
        state.all.push(action.payload)
    },

  }
})

export const selectAllPosts = state =>  state.post.all
export const selectPostById = (state, postId) => state.post.all.find(post => post.id === postId)
export const selectCurrPost = state => state.post.curr
export const { createPost } = postSlice.actions
export default postSlice.reducer