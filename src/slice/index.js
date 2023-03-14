import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    token:null,
    posts:[],
    userposts:[],
    saved:[],
    like:[],
    follow:[],
}
console.log('tokeeeen',initialState.token)

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
          setFollow:(state,action)=>{
            let followItem=state.follow.find(q=>q._id === action.payload._id);
            let followItemm=state.follow.find(q=>q.followUserId === action.payload.followUserId);
            if((followItem && followItemm)=== undefined){
            state.follow = [...state.follow,action.payload];
      
            
          }else{
            state.follow=state.follow.filter(q=>q._id !==action.payload._id)
      
      
          }
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
    liked:(state,action)=>{
      let likedItem=state.like.find(q=>q._id === action.payload._id);
      if(likedItem === undefined){
      state.like = [...state.like,action.payload];

      
    }else{
      state.like=state.like.filter(q=>q._id !==action.payload._id)


    }
},
  }
})

export const {setLogin, setLogout, setFriends, setPosts,setFollow, setPost, setUserPosts,savedAdd, liked } =
  authSlice.actions;
export default authSlice.reducer;