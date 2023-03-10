import { useState } from "react"
import styles from '../Card/Signup.module.css'
import { useNavigate } from "react-router-dom"



function Signup(){
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const Navigate=useNavigate()

    const userHandler = (e) => {
        setUser(e.target.value)
    }

    const passHandler = (e) => {
        setPass(e.target.value)
    }
    const confirmHandler = (e) => {
        setConfirmPass(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(user, pass,confirmPass)
        let a=JSON.parse(localStorage.getItem(user))
        if(a){
            alert('Username already exist')
        }
        else{
            if(pass===confirmPass){
                localStorage.setItem(user,JSON.stringify({'user':user,'password':pass}))
                Navigate('/login')             
            }
            else{
                alert('Password does not match')  
            }
        }
       
    }

    return<>
    <div className={styles.section}>
    <h1 className={styles.username}>Signup Page</h1>
            <form method="post" action="#" target="_self" onSubmit={submitHandler}>

                <label htmlFor="email">Username</label>
                <input type="text" placeholder="enter username" name="email" value={user} onChange={userHandler} required/>

                <label htmlFor="pass">Password</label>
                <input type="password" placeholder="enter password" name="password" value={pass} onChange={passHandler} required/>

                <label htmlFor="confirmPass"> Confirm Password</label>
                <input type="password" placeholder="enter password" name="confirmPass" value={confirmPass} onChange={confirmHandler} required />

                <div className={styles.abc}>
                    <button>Signup</button>
                </div>


            </form>

    </div>
    
    </>
}

export default Signup