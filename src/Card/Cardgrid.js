
import Card from "./Card"


import styles from '../Card/Cardgrid.module.css'


function Cardgrid(props){ 



    return<>
    
    
    <div className={styles.mainDiv}>
      {props.products.map((products) => {
        return (<Card title={products.title} description={products.description} image={products.thumbnail}
          price={products.price} rating={products.rating} id={products.id}></Card>)
      })}
    </div>
    <button onClick={props.pageload}>Next page</button>
   
    
     {/* {show?<Test></Test>:null} 
    <button onClick={displayHandler}>toggle</button>   */}
    
    {/* //  in fetch api call even if url is wrong it will still give response and will not catcg error.it will give error in response */}
    
    
    </>
}

export default Cardgrid