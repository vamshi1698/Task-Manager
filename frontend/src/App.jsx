import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import Signup from './components/Signup'
import { useEffect, useState } from 'react'
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true)
  useEffect( ()=>{
    const fetchTasks =async()=>{
      try{
        const fetchData = await fetch("http://localhost:3000/api/alltasks",{
          method: 'GET',
          credentials: 'include'
        })
        console.log(fetchData) 
        const data = await fetchData.json()
        console.log(data)
        setIsLoggedIn(true)
      }
      catch(e){
        console.log(e)
      }
    }
    fetchTasks()
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