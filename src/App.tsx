import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Spinner from './components/spinner/Spinner'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Feed/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App