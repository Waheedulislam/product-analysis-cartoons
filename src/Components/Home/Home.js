import React from 'react';
import img from '../../img/cartoon.jpg'
import './Home.css'
const Home = () => {
    return (
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

    );
};

export default Home;