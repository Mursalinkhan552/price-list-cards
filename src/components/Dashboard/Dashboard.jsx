import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        {
            id: 1,
            name: 'Student 1'
            , physics: 85,
            chemistry: 90,
            math: 78
        },

        {
            id: 2,
            name: 'Student 2',
            physics: 75, chemistry: 82,
            math: 88
        },

        {
            id: 3,
            name: 'Student 3',
            physics: 92,
            chemistry: 85,
            math: 76
        },
        {
            id: 4,
            name: 'Student 4',
            physics: 80,
            chemistry: 88,
            math: 94
        },
        {
            id: 5,
            name: 'Student 5',
            physics: 89,
            chemistry: 77,
            math: 85
        },
        {
            id: 6,
            name: 'Student 6',
            physics: 78,
            chemistry: 93,
            math: 87
        },
        {
            id: 7,
            name: 'Student 7',
            physics: 86,
            chemistry: 79,
            math: 91
        },
        {
            id: 8,
            name: 'Student 8',
            physics: 94,
            chemistry: 76,
            math: 80
        },
        {
            id: 9,
            name: 'Student 9',
            physics: 83,
            chemistry: 89,
            math: 83
        },
        {
            id: 10,
            name: 'Student 10',
            physics: 91,
            chemistry: 81,
            math: 79
        },
        {
            id: 11,
            name: 'Student 11',
            physics: 70,
            chemistry: 65,
            math: 72
        },
        {
            id: 12,
            name: 'Student 12',
            physics: 88,
            chemistry: 92,
            math: 84
        }
    ];


    return (
        <div style={{ width: "100%", height: "300px" }}>
            <ResponsiveContainer>
                <LineChart data={students}>
                    <Line dataKey='physics'></Line>
                    <Line stroke="#82ca9d" dataKey='math'></Line>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;