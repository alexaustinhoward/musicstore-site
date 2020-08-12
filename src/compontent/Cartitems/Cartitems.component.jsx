import React from 'react';
import'./Cartitems.style.scss';
const  CartItems=({title,artistname,price}) =>(
    <div className='CartItem'>
        <div className='trackname'>{title}</div>
        <div className='artist'>by {artistname}</div>
        <div className='price'>price: {price}</div>
        

    </div>

);
export default CartItems;