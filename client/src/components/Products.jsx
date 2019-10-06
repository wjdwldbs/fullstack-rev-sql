import React from 'react';
  
const Products = (props) => {
   return(
    <div className='product-list-entry'>
        Click the item below to see details: 
        <br/><br/>
      {props.products.map((product, i) => (
          <div key={i} id={i}>
            <div id={product}>{product.item}</div>
          </div>
        ))}
    </div>
  )
}

export default Products;