import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [sell, setSell] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => setSell(data.data))
    }, [])
    return (
        <div>
            <div>
                <h1>INVESTMENT VS REVENUE</h1>
                <BarChart width={500} height={500} data={sell}>
                    {/* <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="investment" fill="#82ca9d" /> */}
                    <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
                    <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis ></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>

            </div>
        </div>
    );
};

export default SpecialChart;