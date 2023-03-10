import React from "react";
import styles from '../Card/Card.module.css'
import {useNavigate} from 'react-router-dom'


function Card(props) {
    const Navigate=useNavigate()

    const descriptionHandler=()=>{
    //    console.log(id)
        console.log('product clicked')
        Navigate(`/products/${props.id}`)
    }
// navigate is use to go through function like clicking on card  it should go to another function
    return (
        <>
            <div className={styles.productDiv} onClick={()=>{descriptionHandler(props.id)}}>
                <img src={props.image} alt='thumbnail'></img>
                <div className={styles.content}>
                    <h2 className={styles.brand}>{props.title}</h2>
                    <p>{props.description.substring(0, 80)}</p>
                    <h3>Price:Rs {props.price}</h3>
                    <h3>Rating:{props.rating}</h3>
                </div>

            </div>
        </>



    )

}

export default Card