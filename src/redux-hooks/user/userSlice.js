import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    all: [
        {
            id: 1,
            username: "test1",
            email: "test1@gmail.com",
            password: "test1password",
            imageUrl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/91768430_10213157172242726_216648823403970560_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=P4Sl3iaUQg0AX_h_T-j&_nc_ht=scontent-iad3-1.xx&oh=00_AfBfSDL8AbjmUfyOzfUUTLfd4bpzkQfbHovGuv2KV3tQkQ&oe=644539D8",
        },
        {
            id: 2,
            username: "test2",
            email: "test2@gmail.com",
            password: "test2password",
            imageUrl: "https://media.licdn.com/dms/image/C5603AQEecxr0r2OSpw/profile-displayphoto-shrink_800_800/0/1639925774469?e=1684972800&v=beta&t=WPnIuvtMijGUm-RUXfyU-MNK-vh6S4GV1ivKg1LG-AE",
        },
    ],
    curr: {},
  },
  reducers: {
    // createUser()
  }
})

export const selectUserByEmail = (state, email) => state.user.all.find(user => user.email === email)
export default userSlice.reducer