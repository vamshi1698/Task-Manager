import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import Signup from './components/Signup'
import { useEffect, useState } from 'react'
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true)

  return(
    <>
    {
      isLoggedIn ?  <Profile /> : <Login />
    }
    </>
  )
}

export default App