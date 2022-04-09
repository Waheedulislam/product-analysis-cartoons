import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

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
                    <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
                    <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis ></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>

            </div>
            <div>
                <h1>AreaChart</h1>
                <AreaChart
                    width={500}
                    height={400}
                    data={sell}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'month'} />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
        </div>
    );
};

export default SpecialChart;