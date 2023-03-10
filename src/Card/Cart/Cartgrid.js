import React, { useState } from "react";
import CartItem from "./CartItem";
import styles from './Cartgrid.module.css'
import {useNavigate } from "react-router-dom";



function Cartgrid(props) {
    // console.log(props.addedProducts)
    let cartValues = props.addedProducts
    console.log(cartValues)
    // const [totalprice,setTotalprice]=useState([])
    // const totalPriceHandler=()=>{

    // }
    let cTotal = cartValues.reduce((acc, curr) => {
        return acc = acc + (curr.count * curr.price)
    }, 0)

    let tax = Math.floor((cTotal * 0.18))

    const[displayConfirmation,setDisplayConfirmation]=useState(true)
    

    
    const Navigate = useNavigate()
    const orderHandler = () => {
        setDisplayConfirmation(false)
       
    }
    const proceed=()=>{
         Navigate('/placed')
    }
    const cancel=()=>{
        setDisplayConfirmation(true)
   }
   
    return (
        <>
           {displayConfirmation? <div className={styles.main_cart_div}>
                <h1 className={styles.head}>Your cart ({props.addedProducts.length} items)</h1>
                <div className={styles.headRow}>
                    <h1>Product detais</h1>
                    <h1>Price</h1>
                    <h1>Quantity</h1>
                    <h1>Remove</h1>
                    <h1>Total</h1>
                </div>
                {props.addedProducts.length === 0 && <h1 className={styles.head}> Cart is empty</h1>}
                {props.addedProducts.map((product) => {
                    return (
                        <>
                            <div className={styles.cartDiv}><CartItem product={product} deleteHandler={props.deleteHandler}
                                increaseCount={props.increaseCount} decreaseCount={props.decreaseCount} /></div>
                        </>

                    )
                })}

                {cartValues.length>0?<div className={styles.summary}>
                    <h1 className={styles.sumText}>Cart Total : {cTotal} Rs</h1>
                    <h2 className={styles.sumText}>GST (18%) : {tax} Rs</h2>
                    <h2 className={styles.sumText}>Delievery charges : 50 Rs</h2>
                    <hr></hr>
                    <h1 className={styles.sumText}>Payable Amount : {cTotal + tax + 50} Rs</h1>
                </div>:null}
                {cartValues.length>0?<button className={styles.order} onClick={orderHandler}>Place Order</button>:null}

            </div>:
            <div className={styles.confirmation}>
                <h1>Your Payable amount is {cTotal + tax + 50} Rs </h1>
                <h2>Do You Want to proceed??</h2>
                <button onClick={proceed}>Proceed</button>
                <button onClick={cancel}>Cancel</button>
            </div>}
        </>
    )

}

export default Cartgrid