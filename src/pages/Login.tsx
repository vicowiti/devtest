import React from 'react'
import Stack from '@mui/material/Stack'
import { Button, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import Logo from '../assets/logo.png'

const Login = () => {
  return (
    <Stack
    className='w-[100vw] h-[80vh]  flex items-center justify-center'
    >
      <div className=' flex flex-col items-center gap-5 justify-center w-[400px]'>
        <section className='flex items-center justify-center'>
          <img src={Logo} alt='logo'  />
        </section>
        <form className='flex flex-col items-center justify-center gap-3 w-[400px]'>
        <TextField  fullWidth label="Email" variant="outlined" type={`email`} />
        <TextField  fullWidth label="Password" variant="outlined" type={`password`} />
        <Button type='submit' fullWidth variant='contained' startIcon={<LoginIcon/>}>Login</Button>
        </form>

      </div>
    </Stack>
  )
}

export default Login