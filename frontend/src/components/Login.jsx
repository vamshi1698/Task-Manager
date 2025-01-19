import { useState } from 'react'
import '../styles/Login.css'
const Login = ()=>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
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
            })
        })
        if(response){
            const data =await response.json()
            console.log(data)
        }
    }
    return(
        <div className='login-div'>
            <form className="login">
                <h3 className="login-h3">Login</h3>
                <input type="text" value={username} name="username" onChange={(e)=>setUsername(e.target.value)} id="username" placeholder='username' />
                <input type="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} id="password" placeholder='password' />
                <button onClick={trylogin} type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login