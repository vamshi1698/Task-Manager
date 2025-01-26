import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import Signup from './components/Signup'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  useEffect(()=>{
    const token  = Cookies.get('token')
    if(token){
      setIsLoggedIn(true)
    }
  },[])
  return(
    <>
    {
      isLoggedIn ?  <Profile /> : <Login />
    }
    </>
  )
}

export default App