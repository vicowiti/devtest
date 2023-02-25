import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getPosts } from '../../features/postsSlice';

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const dispatch = useDispatch()

    const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataMe = {
            title,
            body,
            userId: 200
        }
         dispatch<any>(createPost(dataMe))
         
        setTitle('');
        setBody('')

    }
  return (
    <form onSubmit={handleSubmit}>
        <h3>Add a Post</h3>
        <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Heading"
          fullWidth
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Create Post"
          multiline
          fullWidth
          maxRows={4}
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        </div>

        <Button type='submit'  fullWidth variant='contained' endIcon={<AddCircleIcon/>}>Create</Button>

    </form>
  )
}

export default CreatePost