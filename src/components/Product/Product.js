import React, {Component} from 'react';
import axios from 'axios'
function Product(props){
    return <div className="product">
        <img className="productImage" src={props.product.imageurl} alt=""/>
        <p>{props.product.productname} {props.product.productprice}</p>
        <button onClick={
            () => {
                axios.delete(`/api/product/${props.product.id}`)
            }
            }>
            delete
            </button>
    </div>
}

export default Product