import React from 'react'
import { useContext } from 'react'
import { PostlistItems } from '../store/Post-List-store'
import Post from './Post'
const Postlist = () => {
  const {postList}= useContext(PostlistItems)
  return (
    <div>
      {postList.map((post)=>(
        <Post post={post}></Post>
      ))}
    </div>
  )
}

export default Postlist
