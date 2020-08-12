import React from 'react';
import {connect} from 'react-redux'
import './CheckoutItems.style.scss';
import {removeItem,addItem,lowerItem} from'../../redux/Cart/Cart.actions';


const CheckoutItems = ({cartItem,removeItem,lowerItem,addItem})=>{
  
    const {artistname,Price,title,quantity}= cartItem;
    return (
<div className='checkoutitems'>

            
                <div className='tracktitle'>{title}</div>
                <div className='artistname'>{artistname}</div>
                <div className='quantity'>
                     <img className='decrease' onClick={()=>lowerItem(cartItem)} src='/rewind.svg'/>
                        <span className='quantitytext'> {quantity}</span>
                    <img className='increase' onClick={()=>addItem(cartItem)} src='/forward.svg'/>
                </div>
                <div className='price'>{Price}</div>
                <div className='buyspot'onClick={()=>removeItem(cartItem)}><img className='remove' src='/quit.svg'/></div>
             
</div>
)};
const mapDispatchToProps= dispatch=>({
    removeItem: item => dispatch(removeItem(item)),
    lowerItem: item=> dispatch(lowerItem(item)),
    addItem: item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItems);