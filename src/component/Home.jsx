import React from 'react';
import { useGetAllProductsQuery } from './productsApi';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

 function Home() {
  const {data,loading,error}=useGetAllProductsQuery();
  const dispatch=useDispatch();

  const handleAddToCart=(product)=>{
      dispatch(addToCart(product));
      alert("click to cart seen your cartitem");
  };

  return (
    <div className='home-container'>
        {
          loading ? (
            <p>Loading ..,</p>
          ):error ?(
            <p>An error occured</p>
          ):(
            <>
              <h2>New Arrivals</h2>
              <div className='products'>
                  {data ?.map(product =>(
                      <div key={product.id} className='product'>
                          <h3>{product.title}</h3>
                          <img src={product.images} alt={product.title}></img>
                          <div className='details'>
                              <h4>Description </h4>
                              <span>{product.description}</span>
                              <span className='price'>Price : $ {product.price}</span>
                          </div>
                          <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
                      </div>
                  ))}
              </div>
            </>
          )
        }
    </div>
  )
}

export default Home;