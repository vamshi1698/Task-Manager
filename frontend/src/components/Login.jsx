import { useState } from 'react'
import '../styles/Login.css'
import { Navigate,useNavigate } from 'react-router-dom'
const Login = ({isLoggedIn,setIsLoggedIn})=>{
    const navigate = useNavigate()
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    if(isLoggedIn){
        return <Navigate to='/' replace />
    }
    const navigateSignup = (e)=>{
        e.preventDefault()
        navigate('/signup')
    }
    const trylogin = async(e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:3000/api/login",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username":username,
                "password":password
            }),
            credentials: 'include'
        })
        if(response){
            const data =await response.json()
            console.log(data)
            setIsLoggedIn(true)
            location.reload()
        }
    }
    return(
        <div className='login-div'>
            <form >
                <span className="login">
                    <span className="login-h3">Login</span>
                    <input type="text" value={username} name="username" onChange={(e)=>setUsername(e.target.value)} id="username" placeholder='username' />
                    <input type="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} id="password" placeholder='password' />
                    <button onClick={trylogin} type="submit">Login</button>
                    <div className='buttons-div'>
                        <button>forget password?</button>
                       <button onClick={navigateSignup}>Signup</button> 
                    </div>
                </span>
            </form>
        </div>
    )
}

export default Login