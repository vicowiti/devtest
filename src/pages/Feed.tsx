import React, { useEffect } from 'react'
import {Grid, Stack} from '@mui/material'
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
    <Grid container spacing={2} margin={4}>

      <Grid item xs={12} lg={3}>
        <CreatePost/>
      </Grid>
      <Grid item xs={12} lg={5}>
        <PostList allPosts={allPosts}/>
      </Grid>
      <Grid item>

      </Grid>
      
      
  

    </Grid>
  )
}

export default Feed