import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'
import { Button, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import Logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/userSlice';
import Spinner from '../components/spinner/Spinner';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector(state => state.user)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(email && password){
      
      await dispatch<any>(loginUser({email,password}))
      setEmail('')
      setPassword('')
    }
   
  }

  
  useEffect(() => {
    if(userData.user?.user?._id &&  userData.user?.user?._id.length > 1){
      console.log(userData.user?.user._id);
      
      navigate('/')
    }
  },[userData])
  return (
    <Stack
    className='w-[100vw] h-[80vh]  flex items-center justify-center'
    >
      {userData.isPending && <Spinner />}
      <div className=' flex flex-col items-center gap-5 justify-center w-[400px]'>
        <section className='flex items-center justify-center'>
          <img src={Logo} alt='logo'  />
        </section>
        <form onSubmit={handleLogin} className='flex flex-col items-center justify-center gap-3 w-[400px]'>
        <TextField  fullWidth label="Email" variant="outlined" type={`email`} value={email} onChange={e => setEmail(e.target.value)} />
        <TextField  fullWidth label="Password" variant="outlined" type={`password`} value={password} onChange={e => setPassword(e.target.value)}/>
        <Button type='submit' fullWidth variant='contained' startIcon={<LoginIcon/>}>Login</Button>
        </form>

      </div>
    </Stack>
  )
}

export default Login