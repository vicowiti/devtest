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
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 bg-white p-2 rounded-lg'>
        <h3>Add a Post</h3>
        <div >
        <TextField
          id="outlined-multiline-flexible"
          label="Heading"
          fullWidth
          sx={{mb: 3}}
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

        <Button type='submit' sx={{p: 1, color: '#fff' }}  fullWidth variant='contained' endIcon={<AddCircleIcon/>}>Create</Button>

    </form>
  )
}

export default CreatePost