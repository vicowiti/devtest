import React, { useState} from 'react'
import { Post } from '../../interfaces'
import { Card, CardHeader, CardContent, CardActions } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PostComments from '../postcomments/PostComments';


interface PostCardProps {
    post : Post
}

const PostCard = ({post} : PostCardProps) => {

    const [liked, setLiked] = useState(false);
    
    
   

    const handleLike = () => {
      setLiked(!liked);
    };

  return (
    <>
        <Card>
            <CardHeader title={post.title} />
        <CardContent>
            <p>{post.body}</p>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton onClick={handleLike} color={liked ? "secondary" : "default"}>
            <FavoriteIcon />
            </IconButton>
            <span>{3}</span>
            <IconButton>
            <ChatBubbleOutlineIcon />
            </IconButton>
            <span>{5}</span>
        </CardActions>
        </Card>
        {/* Comments go here */}
        <PostComments postId={post.id} />
    </>
  )
}

export default PostCard