import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    token:null,
    posts:[],
    userposts:[],
    saved:[]
}
// console.log('init',initialState.token)

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            // console.log('init tiken', state.token)
          },
          setLogout: (state) => {
            state.user = null;
            state.token = null;
          },
          setFriends: (state, action) => {
            if (state.user) {
              state.user.friends = action.payload.friends;
              // console.log(state.user.friends)
            } else {
              console.error("user friends non-existent :(");
            }
          },
          setFollow: (state, action) => {
            // let followersItem=state.user.following.find(q=>q.id === action.payload)

            // if (followersItem=== undefined) {
              state.user.following = [...state.user.following,action.payload];
              console.log(state.user.following)
            // } 
          },
          setUnFollow:(state,action)=>{
            state.user.following=state.user.following.filter(q=>q.id !==action.payload)

          },
          setUserPosts: (state, action) => {
            state.userposts = action.payload.userposts;
            // console.log('useeersatte',state.userposts)
          },
          setPosts: (state, action) => {
            state.posts = [...state,action.payload.posts];
          },
          setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
              if (post._id === action.payload.post._id) return action.payload.post;
              return post;
            });
            state.posts = updatedPosts;
            // console.log('update',updatedPosts)
          },
          savedAdd:(state,action)=>{
            let savedItem=state.saved.find(q=>q._id === action.payload._id);
            // console.log('saveeed',savedItem)
            if(savedItem === undefined){
            state.saved = [...state.saved,action.payload];
            // console.log(state.saved)

            
          }else{
            state.saved=state.saved.filter(q=>q._id !==action.payload._id)


          }
    },
  }
})

export const {setLogin, setLogout, setFriends, setPosts,setUnFollow,setFollow, setPost, setUserPosts,savedAdd } =
  authSlice.actions;
export default authSlice.reducer;