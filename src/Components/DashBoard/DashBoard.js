import React from 'react';
import { AreaChart } from 'recharts';
// import AreaChart from '../AreaChart/AreaChart';
import Chirt from '../Chirt/Chirt';
import SpecialChart from '../SpecialChart/SpecialChart';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div className='chart-style'>
            <div className='line-chirt'>
                <h1>MONTH  WISE SELL</h1>
                <Chirt></Chirt>

            </div>
            <br />
            <div>
                <SpecialChart></SpecialChart>
            </div>
        </div>
    );
};

export default DashBoard;