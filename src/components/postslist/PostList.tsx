import React from 'react'
import { PostsState } from '../../interfaces'
import {Stack} from '@mui/material'
import PostCard from '../postcard/PostCard'

interface PostListProps {
    allPosts : PostsState
}

const PostList = ({allPosts} : PostListProps) => {
    const {posts, isPending, isError} = allPosts;

  return (
    <Stack>
        {posts?.map(post => <PostCard key={post.id} post={post} />)}
    </Stack>
  )
}

export default PostList