import CartActionTypes from './cart.types';
import {addItemToCart,lowerItem} from './cart.utils';

const INITIAL_STATE ={
    display:true,
    cartItems:[]
}
const cartReducer =(state=INITIAL_STATE, action)=>{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_DISPLAY:
            return{
                ...state,
                display: !state.display
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem=> cartItem.title !== action.payload.title
            )
            };
        case CartActionTypes.LOWER_ITEM:
            return{
                ...state,
                cartItems:lowerItem(state.cartItems,action.payload)

            };
            default:
                return state;
    }
}
export default  cartReducer;
