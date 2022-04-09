import React from 'react';
import useProducts from '../../hooks/useProducts';
import img from '../../img/cartoon.jpg'
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div >
            <div className='total-style'>
                <div>
                    <h1 className='color1'>CARTOON
                        <br />
                        NEXT</h1>
                    <p>A cartoon is a type of illustration that is typically drawn, sometimes animated, in an unrealistic or semi-realistic style. The specific meaning has evolved over time, but the modern usage usually refers to either: an image or series of images intended for satire, caricature, or humor.</p>
                    <button className='btn-style'>See More</button>
                </div>
                <div className='img-with'>
                    <img src={img} alt="" />
                </div>

            </div>
            <br />
            <br />
            <div>
                <h1 className='customer-title'>Customer Reviews(3)</h1>
            </div>
            <div>
            </div>
            <div className="products-container">
                {
                    products.map(product => <Cart
                        key={product.id}
                        product={product}
                    ></Cart>)
                }
            </div>
            <button>See All Reviews</button>
        </div>

    );
};

export default Home;