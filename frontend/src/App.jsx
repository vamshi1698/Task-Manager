import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import Signup from './components/Signup'
import Cookies from 'js-cookie'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(()=>{
    const token  = Cookies.get('token')
    if(token){
      return true
    }
    return false
  })
  return(
    <>
    
    <Router>
      <Routes>
        <Route path='/'  element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup'  element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </Router>
  </>
  )
}

export default App