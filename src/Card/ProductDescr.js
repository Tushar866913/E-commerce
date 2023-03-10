import { useParams } from 'react-router-dom'
import styles from '../Card/ProductDescr.module.css'
import { useState } from 'react'


function Pdp(props) {
    const params = useParams()
    console.log(params.productid)
    const selectedProduct = props.products.find((product) => {
        return product.id === +params.productid
    })
    const [selectedImg, setselectedimg] = useState(selectedProduct.images[0])

    console.log(selectedProduct)



    const imagehandler = (e) => {
        // alert(e.target.src)
        setselectedimg(e.target.src)
        // console.log(e.target.src)
        var a = document.getElementsByClassName('abc')
        console.log(a)
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove(styles.click)
        }
        e.target.classList.add(styles.click)
    }

    
    const cart_value = (selectedProduct) => {
        props.addToCartHandler(selectedProduct)
        props.cartTextHandler()  
    }





    if (selectedProduct === undefined) {
        return <></>
    }

    return <>
        <div className={styles.pdpcont}>
            <div className={styles.imgcont}>
                <img src={selectedImg}></img>
            </div>


            <div className={styles.mainCont}>
                {/* <h1 className={styles.headText}>this is product description for {params.productid}</h1> */}
                <h2 className={styles.headText}>{selectedProduct.title}</h2>
                <p className={styles.headText}>{selectedProduct.description}</p>
                <h3>Stock:{selectedProduct.stock}</h3>
                <h3>Price:{selectedProduct.price} Rs</h3>
                <h3>Discount price:{selectedProduct.discountPercentage}</h3>
                <div className={styles.picContainer}>
                    <div><img src={selectedProduct.images[0]} alt='loading' onClick={imagehandler} className='abc' /></div>
                    <div> <img src={selectedProduct.images[1]} alt='loading' onClick={imagehandler} className='abc' /></div>
                    <div> <img src={selectedProduct.images[2]} alt='loading' onClick={imagehandler} className='abc' /></div>
                    <div> <img src={selectedProduct.images[3]} alt='loading' onClick={imagehandler} className='abc' /></div>
                </div>
                <button className={styles.cartbutton} id={selectedProduct.id} onClick={() => cart_value(selectedProduct)}>Add to cart</button>
            </div>
        </div>

    </>
}

export default Pdp