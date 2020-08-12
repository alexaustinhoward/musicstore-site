import React from 'react';
import './CartDropMenu.style.scss';
import {selectCartItemsCount,selectCartItemsPriceCount,selectCartItems} from '../../redux/Cart/Cart.selectors';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux';
import CartItems from '../Cartitems/Cartitems.component';
import {toggleCartDisplay} from '../../redux/Cart/Cart.actions';
const CartDropMenu= ({toggleCartDisplay,cartItems,ItemCount,PriceCount})=>
(
    <div className="CartDropMenu">
        <a className="head" onClick={toggleCartDisplay}>Cart{'('}{ItemCount}{')'}</a>
        <div className="dropitems">
            {cartItems.map(cartItem=>(
                <CartItems key={cartItem.title+cartItem.artistnames} title={cartItem.title} artistname={cartItem.artistnames} price={cartItem.Price+'x'+cartItem.quantity}/>
            )) }
        <div className='total'>Total:{PriceCount.toFixed(2)}</div>
        <Link  to={'/checkout'}>
        <a  className="myButton">Checkout</a>
        </Link>
        </div>
    </div>
);
const mapStateToProps=state=>
({
    cartItems: selectCartItems(state),
    ItemCount: selectCartItemsCount(state),
     PriceCount: selectCartItemsPriceCount(state)
})
const mapDispatchToProps = dispatch=>({
    toggleCartDisplay: ()=> dispatch(toggleCartDisplay()),
})
 export default connect(mapStateToProps, mapDispatchToProps)(CartDropMenu);

