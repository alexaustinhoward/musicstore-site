import {createSelector} from 'reselect';
const selectCart= state=>state.cart;
export const selectCartItems = createSelector(
    [selectCart],
    (cart)=> cart.cartItems
);
export const selectCartItemsCount= createSelector(
    [selectCartItems],
    cartItems=>
    cartItems.reduce(
        (accumalatedQuantity,cartItem)=> 
        accumalatedQuantity+ cartItem.quantity,
        0
        )

);
export const selectCartItemsPriceCount= createSelector(
    [selectCartItems],
    cartItems=>
    cartItems.reduce(
        (accumalatedPrice,cartItem)=> 
        accumalatedPrice+ Number(cartItem.Price)*cartItem.quantity,
        0)

);

