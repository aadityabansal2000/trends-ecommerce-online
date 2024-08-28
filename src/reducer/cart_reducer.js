function cart_reducer(state,action) {
  if(action.type==="ADD_TO_CART")
  {
  let {productId,units,product}=action.payload;
  let cartProduct;
  cartProduct={
  id:productId,
  name:product.title,
  quantity:units,
  price:product.price,
  image:product.image,
  max:product.rating.count
  };
  return {
   ...state,cart:[...state.cart,cartProduct],
  };
  }
  if(action.type==="REMOVE_ITEM")
  {
  let newCart=state.cart.filter((curItem)=>curItem.id!==action.payload);
  return {
  ...state,cart:newCart
  };  
  }
  if(action.type==="EMPTY_CART")
  {
  let empCart=[];
  return {
  ...state,cart:empCart
  };
  }
  return state;
}

export default cart_reducer;