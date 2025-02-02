import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import Signup from './components/Signup'
import Cookies from 'js-cookie'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
    
    <Router>
      <Routes>
        <Route path='/'  element={<Profile  />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup'  element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App