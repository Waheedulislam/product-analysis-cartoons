import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import './Cart.css'
const Cart = ({ product }) => {
    const { img, people, peopleImg, rating, details } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{details}</p>
                <div className='people-style'>
                    <img src={peopleImg} alt="" />
                    <h4>Name: {people}</h4>
                </div>
                <div className='icons-style'>
                    <div><h4 className='rating-style'>Rating: {rating}</h4></div>
                    <div className='icon-style'>
                        <StarIcon ></StarIcon>
                        <StarIcon ></StarIcon>
                        <StarIcon ></StarIcon>
                        <StarIcon ></StarIcon>
                        <StarIcon ></StarIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;