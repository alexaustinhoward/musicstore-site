export const addItemToCart =(cartItems, cartItemAdd)=>{
const existingCartItem = cartItems.find(
    cartItem=>cartItem.title === cartItemAdd.title
);
if(existingCartItem){
    return cartItems.map(cartItem =>
        cartItem.title=== cartItemAdd.title
        ?{...cartItem, quantity: cartItem.quantity +1}
        : cartItem
        )
}
return [...cartItems,{...cartItemAdd, quantity:1}]
};
export const lowerItem=(cartItems, lowerItem)=>{
    const existingCartItem = cartItems.find(
        cartItem=>cartItem.title === lowerItem.title
    )
    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem=>
             cartItem.title !== lowerItem.title)
    }    
    return cartItems.map(
        cartItem =>
        cartItem.title=== lowerItem.title
        ?{...cartItem, quantity: cartItem.quantity -1}
        : cartItem 
    )
}