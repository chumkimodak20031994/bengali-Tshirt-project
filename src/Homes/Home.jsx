import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import Cart from '../Cart/Cart';
import "./Home.css";
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const tshirts=useLoaderData();
    const [cart, setCart]=useState([]);

    const handleAddToCart = tshirt=>{
      const exists = cart.find(ts => ts._id === tshirt._id)
      if(exists){
 toast.error('you have allready addeded tshirt')

      }
      else{
        const newCart = [...cart, tshirt]
        setCart(newCart);
      }
      // console.log(tshirt);
      
    }

const handleRemoveFromCart = id =>{
  const remaining = cart.filter(ts=>ts._id !== id);
  setCart(remaining);
}
    return (
        <div className='home-container'>
      <div className='t-shirts-container'>
      {
        tshirts.map(tshirt=><Tshirts
        key={tshirt._id}
        tshirt={tshirt}
        handleAddToCart={handleAddToCart}
        ></Tshirts>)
       }  
       
        </div> 
        <div className='cart-container'>
<Cart 
cart={cart}
handleRemoveFromCart={handleRemoveFromCart}
></Cart>
       </div>
        
        </div>
    );
};

export default Home;