import React, { useState } from "react";
import styles from './Cartitem.module.css'

function CartItem(props) {
const increase=(product)=>{
   props.increaseCount(product)
}
const reduce=(product)=>{
    props.decreaseCount(product)
}
const del=(id)=>{
    props.deleteHandler(id)
}


    return (
        <>
            <div className={styles.cartRow}>
                <div className={styles.details_col}>
                    <div><img src={props.product.thumbnail}></img></div>
                    <h2>{props.product.title}</h2>
                </div>
                <h2><span>RS:</span> {props.product.price}</h2>
                <div className={styles.QtyDetails}>
                    <button onClick={()=>increase(props.product)}>+</button>
                    <h2>{props.product.count}</h2>
                    <button onClick={()=>reduce(props.product)}>-</button>
                </div>
                <div className={styles.trash} onClick={()=>{del(props.product.id)}}> 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqzPVCUVIqseC3V7sHonZGmzGuGdX_4EGcJQo2kM&s"></img>
                </div>
                <h2 ><span>RS:</span> {props.product.price*props.product.count}</h2>
            </div>

        </>
    )
}

export default CartItem