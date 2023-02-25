import React, { useEffect } from 'react'
import {Stack} from '@mui/material'
import CreatePost from '../components/createpost/CreatePost'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/postsSlice'
import { PostsState } from '../interfaces'
import PostList from '../components/postslist/PostList'

interface RootState {
  posts :  PostsState
}


const Feed = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(getPosts())
  },[dispatch])

  const allPosts = useSelector((state: RootState) => state.posts)
  
  
  return (
    <Stack>
      <CreatePost/>
      <PostList allPosts={allPosts}/>
  

    </Stack>
  )
}

export default Feed