import React from 'react';
import './Cart.css';


const Cart = ({cart, handleRemoveFromCart }) => {
    // message pathano if else uses
    let message;
if (cart.length === 0){
    message=<p>Please Add Some products</p>
}
else {
    message=<p>thanks give some money</p>
}

    return (
        <div>
            {/* jodi carte 1time jog hoy tahole blue nahole red dekhaw */}
         <h4 className={cart.length === 1 ? 'blue' : 'red'}>orderd sumarry:{cart.length}</h4>
         <p className={`bold bordered ${cart.length === 4 ? 'gold': 'silver'}`}>somethingh</p>
         {message} 
    {/* turnary oparetor uses jodi duyer basi please buy nahole not buy */}
         {cart.length > 2 ? <span className='orange'>Please buy</span> : <span> why not buy  ?</span> } 
         { 
            cart.map(tshirt=><p
            key={tshirt._id}
            >{tshirt.name}
<button onClick={()=>handleRemoveFromCart(tshirt._id)}className='button'>x</button>
            </p> )
         }
         {/* logical value sudhumatro 2to add holey message debe na hole debena */}
         {
            cart.length === 2 && <p>Double bonaza!!</p>
         }
         {/* logical 3er soman na hole ai message ta debe   */}
         {
            cart.length === 3 || <h3>Tinta to halo na</h3>
         }
        </div>
    );
};

export default Cart;