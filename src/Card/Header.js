import styles from '../Card/Header.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'




function Header(props) {

  const Navigate=useNavigate()

const logoutHandler=()=>{
 let confo= window.confirm('you really want to exit');
 if(confo===true){
   props.lgn()
   Navigate('/')
  }

}

    return <>
    <div className={styles.nav}>
    <div className={styles.navPart1}>
            <h1>MYCART</h1>
            <ul>
              <Link to='/' className={styles.links}> <li>Home</li></Link>
              <Link to='/' className={styles.links}> <li>About</li></Link>
              <Link to='/products' className={styles.links}><li>Products</li></Link>  
            </ul>
        </div>
        <div className={styles.navPart2}>
          {props.loginstate?<h4 onClick={logoutHandler}>Logout</h4>:<Link to='/login' className={styles.links}><h4>Login</h4></Link> } 
          
          <Link to='/cart' className={styles.links}>{props.loginstate?<h4>Cart<span className={styles.count}>{props.items}</span></h4>:null} </Link> 

        </div>
    </div>

    </>
}
export default Header