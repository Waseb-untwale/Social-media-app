import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer';
import Postlist from './Component/Postlist';
import { useState } from "react";
import CreatePost from './Component/CreatePost'
// import { PostlistItems } from "./store/Post-List-store";
// import { useReducer } from "react";
import PostlistItemsProvider  from "./store/Post-List-store";
function App() {


  const[selected,setSelected]=useState("Home")
//  const PostItemReducer=(currentState,action)=>{
  
//   let newPost=currentState
//   if(action.type=="ADD_POST"){
//     newPost=[
//       action.payload,...currentState
//     ]
//   }

//   else if(action.type=="DELETE_POST"){
//     newPost=currentState.filter((post)=>(
//       post.id !== action.payload.postId
//     ))
//   }
//   return newPost
//  }


//  const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     userTitle: "Going to Mumbai",
//     userBody: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
//     userRection: 2,
//     userId: "user-9",
//     userhastags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     userTitle: "Paas ho bhai",
//     userBody: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
//     userRection: 15,
//     userId: "user-12",
//     userhastags: ["Graduating", "Unbelievable"],
//   },
// ];

  // const [postList,DispatchPostList]=useReducer(PostItemReducer, [])

  // const addItem=(userId,userTitle,userBody,userRection,userhastags)=>{
  //   DispatchPostList({
  //     type:"ADD_POST",
  //     payload:{
  //       id:Date.now(),
  //       userId:userId,
  //       userTitle:userTitle,
  //       userBody:userBody,
  //       userRection:userRection,
  //       userhastags:userhastags
  //     }
  //   })


  // }

  // const deletePost=(postId)=>{
  //   DispatchPostList({
  //     type:"DELETE_POST",
  //     payload:{
  //       postId
  //     }
  //   })
  // }

  
  

  return (
    <PostlistItemsProvider>
       <div className="app-container">
      <Sidebar selected={selected}
      setSelected={setSelected}></Sidebar>
      <div className="content">
      <Header></Header>
      {selected==="Home" ?<Postlist></Postlist>:<CreatePost></CreatePost>}
      <Footer></Footer>
      </div>
      </div>
    </PostlistItemsProvider >
   
    
     
  );
}

export default App
