import styles from '../styles/Signup.module.css'
const Signup = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.signup}>
                <h3>Sign up</h3>
                <input type="text" name="username" id="username" />
                <input type="text" name="password" id="password" />
                <div>
                    <button>Signup</button>
                </div>
            </div>
        </div>
    )
    
}
export default Signup