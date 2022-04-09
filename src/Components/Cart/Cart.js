import React from 'react';
import './Cart.css'
const Cart = ({ product }) => {
    const { name, img, price, } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Name: {name}</small></p>
            </div>
        </div>
    );
};

export default Cart;