import styles from '../Cart/Placed.module.css'
import {useNavigate } from 'react-router-dom'

function Placed(props){
const Navigate=useNavigate()
const clearCart=props.clearCart

const homeNav=()=>{
    Navigate('/')
    clearCart()
}

    return<>
    <div className={styles.orderDiv}>
        <img src="https://c8.alamy.com/comp/2ABNAN7/green-check-mark-icon-in-a-circle-tick-symbol-in-green-color-2ABNAN7.jpg" alt='complete'></img>
        <h1>Order placed</h1>
        <h2>Thank You For Shopping With us</h2>
        <button className={styles.ok} onClick={homeNav}>Ok</button>

    </div>
    
    </>
}

export default Placed