import React from 'react'
import Stack from '@mui/material/Stack'
import { Button, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import Logo from '../assets/logo.png'

const Login = () => {
  return (
    <Stack>
      <div>
        <section>
          <img src={Logo} alt='logo' />
        </section>
        <form>
        <TextField id="outlined-basic" label="Email" variant="outlined" type={`email`} />
        <TextField id="outlined-basic" label="Password" variant="outlined" type={`password`} />
        <Button type='submit' variant='contained' startIcon={<LoginIcon/>}>Login</Button>
        </form>

      </div>
    </Stack>
  )
}

export default Login