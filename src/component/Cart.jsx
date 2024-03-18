import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseFromCart, getTotals, removeFromCart } from './cartSlice';


function Cart() {

  const cart=useSelector((state)=>state.cart);
  const dispatch=useDispatch();

  const handleRemovefromCart=(cartItem)=>{
    dispatch(removeFromCart(cartItem));
  }

  const decreaseCartQuantity=(cartItem)=>{
    dispatch(decreaseFromCart(cartItem));
  }

  const increaseCartQuantity=(cartItem)=>{
    dispatch(addToCart(cartItem));
  }

  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  useEffect(()=>{
    dispatch(getTotals());
  },[cart])

  return (
    <div className='cart-container'>
        <div>
            <h2>Shopping Cart</h2>
        </div>
        <div className='titles'>
            <h3>Product</h3> 
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3 className='total'>Total</h3>
        </div>
        <div className='cart-items'>
            {
              cart.cartItems ?.map((cartItem)=>(
                <div className='cart-item' key={cartItem.id}>
                  <div className='cart-product'>
                      <img src={cartItem.images} alt={cartItem.name}></img>
                      <div>
                        <h3>{cartItem.title}</h3>
                        <button onClick={()=>handleRemovefromCart(cartItem)}>Remove</button>
                      </div>
                  </div>
                    
                    <div className='cart-product-price'>
                        $ {cartItem.price}
                    </div>
                    <div className='product-quantity'>
                      <button onClick={()=>decreaseCartQuantity(cartItem)}>-</button>
                      <div className='count'>{cartItem.cartQuantity}</div>
                      <button onClick={()=>increaseCartQuantity(cartItem)}>+</button>
                    </div>
                    <div className='total'>
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                </div>
              ))
              
            }
            <div className='cart-summary'>
                    <button onClick={()=>handleClearCart()}>Clear cart</button>
                    <div className='subtotal'>
                      <span> subTotal: $ {cart.cartTotalAmount}</span>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Cart;
