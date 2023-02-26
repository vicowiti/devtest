import React, { useState, useEffect} from 'react'
import { CommentState, Post } from '../../interfaces'
import { Card, CardHeader, CardContent, CardActions } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PostComments from '../postcomments/PostComments';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../features/commentsSlice';


interface PostCardProps {
    post : Post
}

interface RootState {
  comments : CommentState
}

const PostCard = ({post} : PostCardProps) => {

    const [liked, setLiked] = useState(false);
    const [showComments, setShowComments] = useState(false)
    const [commentCount, setCommentCount] = useState(0)
    
    const dispatch = useDispatch()
    const commentData = useSelector((state: RootState) => state.comments)
    
    const handleLike = () => {
      setLiked(!liked);
    };


    const handleComments = async() => {
      await dispatch<any>(getComments(post.id))
      setShowComments(!showComments)
    }

  
  return (
    <>
        <Card>
            <CardHeader title={post.title} />
        <CardContent>
            <p>{post.body}</p>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton onClick={handleLike} color={liked ? "warning" : "default"}>
            <FavoriteIcon />
            </IconButton>
            <span>{liked ? 1 : 0}</span>
            <IconButton onClick={handleComments}>
            <ChatBubbleOutlineIcon />
            </IconButton>
            <span>{commentData.comments?.length}</span>
        </CardActions>
        </Card>
        {/* Comments go here */}
        { showComments && <PostComments commentData={commentData}/>}
    </>
  )
}

export default PostCard