import React from 'react'


function Product(props){
    const {product} = props;
    return(
        <div className='product_item'>
            <a href=''>
            <img src={product.image} alt={product.name}/>
            </a>
            <h5>{product.name}</h5>
            <h6></h6>
        </div> 
    );
}
export default Product;




