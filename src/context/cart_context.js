import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/cart_reducer';
const CartContext = createContext();
const initialState={
cart:[],
total_item : "",
total_amount: ""   
};
const CartProvider = ({children})=>
{
const [state,dispatch]=useReducer(reducer,initialState);
const addToCart = (productId,units,product)=>{
dispatch({type:"ADD_TO_CART",payload:{productId,units,product}});
};
const deleteFromCart=(id)=>{
  
    dispatch({type:"REMOVE_ITEM",payload:id});
};
const emptyCart=()=>{
    dispatch({type:"EMPTY_CART"});
};
return (<CartContext.Provider value={{...state,addToCart,deleteFromCart,emptyCart}}>
{children}
</CartContext.Provider>
);
};
const useCartContext = ()=>{
return useContext(CartContext);
};
export {CartProvider,useCartContext};