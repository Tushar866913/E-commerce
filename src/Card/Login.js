
import styles from '../Card/Login.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Login(props) {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [member,setMember]=useState(true)
    const Navigate = useNavigate()

    const userHandler = (e) => {
        setUser(e.target.value)
    }

    const passHandler = (e) => {
        setPass(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        let a = JSON.parse(localStorage.getItem(user))
        console.log(a)
        if (a===null) {
            setMember(false)
        }
        if (user === a.user && pass === a.password) {
            props.lgn()
            Navigate('/products')
        }
        else {
            alert('please enter correct username and password')
        }
    }

    const sighnupHandler = () => {
        Navigate('/signup')
    }

    return <>


       {member? <div className={styles.section} >
            <h1 className={styles.username}>Login Page</h1>
            <form method="post" action="#" target="_self" onSubmit={submitHandler}>

                <label htmlFor="email">Username</label>
                <input type="text" placeholder="enter username" name="email" value={user} onChange={userHandler} />

                <label htmlFor="pass">Password</label>
                <input type="password" placeholder="enter password" name="password" value={pass} onChange={passHandler} />

                <div className={styles.abc}>
                    <button>Login</button>
                </div>
            </form>

            <p onClick={sighnupHandler}> Not a member?? sign up..</p>

        </div>:
        <div className={styles.confirmation}>
            <h1>You are not member </h1>
            <h2>Please signup</h2>
            <button onClick={sighnupHandler}>Signup</button>
        </div>}

    </>
}

export default Login