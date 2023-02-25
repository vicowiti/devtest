import { Avatar, Card, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getComments } from '../../features/commentsSlice'
import { CommentState } from '../../interfaces'
import CommentCard from '../commentcard/CommentCard'

interface PostCommentsProps {
    postId: number

}

interface RootState {
    comments : CommentState
}
const PostComments = ({postId}: PostCommentsProps) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(getComments(postId))
    },[dispatch])

    const data = useSelector((state: RootState) => state.comments)
    
    
  return (
    <div>
        {data.comments?.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
    </div>
  )
}

export default PostComments