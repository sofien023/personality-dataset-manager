import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
    { name: 'A', value: 12 },
    { name: 'B', value: 18 },
    { name: 'C', value: 5 },
    { name: 'D', value: 30 },
    { name: 'E', value: 9 },
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