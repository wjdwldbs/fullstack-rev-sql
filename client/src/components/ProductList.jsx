import React from 'react';
import Products from './Products';
  
const ProductList = (props) => {
   return(
    <div className='product-list'>
      <Products products={props.products} />
    </div>
  )
}

export default ProductList