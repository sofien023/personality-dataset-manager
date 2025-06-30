import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
    { name: 'Monday', value: 12 },
    { name: 'Tuesday', value: 18 },
    { name: 'Wednesday', value: 5 },
    { name: 'Thursday', value: 30 },
    { name: 'Friday', value: 9 },
    { name: 'Saturday', value: 29 },
    { name: 'Sunday', value: 20 },
];

const Histogram = ({ data = sampleData }) => (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    </ResponsiveContainer>
);

export default Histogram;