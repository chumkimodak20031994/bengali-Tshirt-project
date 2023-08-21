import React from 'react';
import "./Tshirts.css"

const Tshirts = ({tshirt, handleAddToCart}) => {
    const {picture, name, price}=tshirt;
    return (
        <div className='t-shirt'>
        <img src={picture}></img> 
        <h4 className='price'>Name: {name}</h4>  
        <p className='price'>Price: $ {price}</p>
        <button onClick={()=>handleAddToCart(tshirt)}className='button'>Buynow</button>
        </div>
    );
};

export default Tshirts;