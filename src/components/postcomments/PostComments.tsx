

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getComments } from '../../features/commentsSlice'
import { CommentState } from '../../interfaces'
import CommentCard from '../commentcard/CommentCard'

interface PostCommentsProps {
    commentData: CommentState
    

}


const PostComments = ({commentData}: PostCommentsProps) => {
    const dispatch = useDispatch()

   


    
    
  return (
    <div className='ml-5'>
        {commentData.comments?.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
    </div>
  )
}

export default PostComments