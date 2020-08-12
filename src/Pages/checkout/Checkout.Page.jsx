import React from 'react';
import './Checkout.style.scss';
import NavBar from '../../compontent/navbar/navbar.component';
import {connect}  from 'react-redux';
import {selectCartItemsCount,selectCartItemsPriceCount,selectCartItems} from '../../redux/Cart/Cart.selectors';
import CheckoutItems from'../../compontent/CheckoutItems/CheckoutItems.component';
const Checkout= ({cartItems,ItemCount,PriceCount})=>(
    <div className="checkout">
<NavBar/>
<div className='checkinfo'>
{cartItems.map((cartItems) => (
                        <CheckoutItems  key={cartItems.title+cartItems.title+cartItems.title}
                        cartItem={cartItems}/>
                        
                    ))}
                    <div className='total'>Total:{PriceCount.toFixed(2)}</div>
                    </div>
</div>
);
const mapStateToProps=state=>
({
    cartItems: selectCartItems(state),
    ItemCount: selectCartItemsCount(state),
     PriceCount: selectCartItemsPriceCount(state)
})
export default connect(mapStateToProps)(Checkout);