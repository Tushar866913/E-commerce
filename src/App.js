
import Header from './Card/Header';
import { Route, Routes } from 'react-router-dom';
import Cardgrid from './Card/Cardgrid';
import Home from './Card/Home';
import Pdp from './Card/ProductDescr';
import { useState, useEffect } from "react";
import axios from "axios";
import Login from './Card/Login';
import Footer from './Card/Footer';
// import { useNavigate } from 'react-router-dom';
import Cartgrid from './Card/Cart/Cartgrid';
import Placed from './Card/Cart/Placed';
import Signup from './Card/Signup';

function App() {

  const [post, setPost] = useState([]);
  const [nextPage, setnextPage] = useState(1)
  const [err, setErr] = useState(null)
  const [login, setlogin] = useState(false)
  // const navigate = useNavigate()
  // const[show,setShow]=useState(true)


  //use efffet without dependency will load every time the page is loadedor any state change happens
  // use effect with empty dependency will load only at start when the page will load
  //use effect with dependency will load in any state change happens in dependency
  //the return function in use effect will only executed when the component will unmount

  // function Test() {


  //   useEffect(()=>{
  //     console.log('i am mounted')

  //     return ()=>{
  //       console.log('i am removed')
  //     }

  //     },[])

  //     return<>
  //         <h1 >i am test component</h1>        
  //     </>

  // }




  // const displayHandler=()=>{
  //   setShow(!show)
  // }



  useEffect(() => {

    console.log("use effect 2")

    axios
      .get(`https://dummyjson.com/products?limit=${nextPage * 20}`)
      .then((response) => {
        console.log(response)
        setPost(response.data.products)

      })

      .catch((error) => {
        console.log(error)
        setErr(error.message)

      })


    // to post data 
    // const body={
    //   name:'tushar'
    // }

    // const options={
    //   method:'POST',
    //   header:{
    //     'Content-type':'application'
    //   },
    //   body:JSON.stringify(body)
    // }

    // fetch('https://jsonplaceholder.typicode.com/posts',options)



    // to fetch data using fetch

    // fetch('https://dummyjson.com/products?limit=20')
    // .then((respose)=>{
    //   console.log(respose)
    //   return respose.json();

    // })
    // .then((body)=>{
    //   console.log(body.products)
    // })



  }, [nextPage]);

  console.log(post)

  const nextPageLoader = () => {
    setnextPage(nextPage + 1)
  }

  const loginHandler = () => {
    setlogin(!login)
  }

  const [addedProducts, setAddedProducts] = useState([])
  const [cart_text, setCart_text] = useState(true)
  const addToCartHandler = (selectedProduct) => {
    const exist = addedProducts.find((cart_product) => { return selectedProduct.id === cart_product.id })
    console.log(exist)
    if (exist) {
      window.alert('already in cart')
    }
    else {
      console.log(selectedProduct)
      setAddedProducts([...addedProducts, { ...selectedProduct , count:1 }])
    }
  }
  console.log(addedProducts)
  const increaseCount=(product)=>{
    console.log(product)

    product.count=product.count+1
    console.log(product)
    setAddedProducts([...addedProducts])

// belowmethod is also ok
    // let index = addedProducts.findIndex(x => x.id ===product.id);
    // console.log(index)
    // console.log(addedProducts[index].count)
    // addedProducts[index].count+=1
    // setAddedProducts([...addedProducts])
   
  }
  const decreaseCount=(product)=>{
    if(product.count>1){
      product.count=product.count-1
    }
    console.log(product)
    setAddedProducts([...addedProducts])
  }

  const deletehandler = (id) => {
    console.log(id)
    setAddedProducts(addedProducts.filter((product) => { return product.id !== id }))
  }
  const cartTextHandler=()=>{
    setCart_text(false)
  }

  const clearCart=()=>{
    setAddedProducts([])
  }
  return <>
    {setErr != null && <h1 style={{ color: 'red' }}>{err}</h1>}
    <Header loginstate={login} lgn={loginHandler} items={addedProducts.length}></Header>

    <Routes>
      <Route path='/login' element={<Login lgn={loginHandler}></Login>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/products' element={login ? <Cardgrid products={post} pageload={nextPageLoader}></Cardgrid> :
        <h1 style={{ color: 'gray' }} >You are not Logged in,Please login</h1>}></Route>
      <Route path='/products/:productid' element={<Pdp products={post} addToCartHandler={addToCartHandler} cartText={cart_text} cartTextHandler={cartTextHandler}></Pdp>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/cart' element={<Cartgrid addedProducts={addedProducts} deleteHandler={deletehandler} increaseCount={increaseCount}
                                              decreaseCount={decreaseCount} ></Cartgrid>}></Route>
     <Route path='/placed' element={<Placed clearCart={clearCart}/>}></Route>
      <Route path='*' element={<h1>This page does not exist</h1>}></Route>
      {/* whenever we click any url other than default route this page will show */}
    </Routes>

    <Footer></Footer>

  </>

}

export default App;
