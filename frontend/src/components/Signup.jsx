import { Navigate } from 'react-router-dom'
import styles from '../styles/Signup.module.css'
import { useState } from 'react'
const Signup = ({isLoggedIn,setIsLoggedIn})=>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    if(isLoggedIn){
        return <Navigate to='/' replace />
    }
    const trysignup = async(e)=>{
        e.preventDefault()
         fetch(`http://localhost:3000/api/signup`,{
            method:"POST",
            credentials:"include",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({
                username:username,password,email
            })
        }).then(async (response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log("Error : ",e)
        })
        location.reload()
    }
    return(
        <div className={styles.container}>
            <form className={styles.signup}>
                <h3>Sign up</h3>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name="username" id="username"  placeholder='username'/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="password" placeholder='password'/>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder='email'/>
                <div>
                    <button onClick={trysignup}>Signup</button>
                </div>
            </form>
        </div>
    )
    
}
export default Signup