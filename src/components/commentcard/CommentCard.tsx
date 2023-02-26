import { Avatar, Card, Typography } from '@mui/material'
import React from 'react'
import { Comment } from '../../interfaces'

interface CommentCardProps {
    comment : Comment
}

const CommentCard = ({comment}: CommentCardProps) => {
  return (
    <Card className='my-2 rounded-md p-2 flex gap-2'>
        <Avatar>
            {comment.name[0]}
        </Avatar>
        <Typography>
            {comment.body}
        </Typography>
        <small>{comment.email}</small>
    </Card>
  )
}

export default CommentCard