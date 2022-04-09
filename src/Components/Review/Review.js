import React from 'react';
import useProducts from '../../hooks/useProducts';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='products-container'>
            {
                products.map(product => <ReviewCart
                    key={product.id}
                    product={product}
                ></ReviewCart>)
            }
        </div>
    );
};

export default Review;