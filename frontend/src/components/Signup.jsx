import { Navigate } from 'react-router-dom'
import styles from '../styles/Signup.module.css'
const Signup = ({isLoggedIn,setIsLoggedIn})=>{
    if(isLoggedIn){
        return <Navigate to='/' replace />
    }

    return(
        <div className={styles.container}>
            <form className={styles.signup}>
                <h3>Sign up</h3>
                <input type="text" name="username" id="username" />
                <input type="text" name="password" id="password" />
                <div>
                    <button >Signup</button>
                </div>
            </form>
        </div>
    )
    
}
export default Signup