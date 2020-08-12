import CartActionTypes from './cart.types'
export const toggleCartDisplay=()=>
({
    type: CartActionTypes.TOGGLE_CART_DISPLAY
});
export const addItem = item =>({
    type:CartActionTypes.ADD_ITEM,
    payload: item
})
export const removeItem= item =>({
    type:   CartActionTypes.REMOVE_ITEM,
    payload:item
})
export const lowerItem= item =>({
    type:   CartActionTypes.LOWER_ITEM,
    payload: item
})