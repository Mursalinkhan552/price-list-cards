import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                console.log(loadedData);
                const phonesData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                })
                console.log(phonesData);
                setPhones(phonesData);
            })
    }, [])
    return (

        <div style={{ width: "100%", height: "500px" }}>
            <ResponsiveContainer>
                <BarChart data={phones}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>

        </div>




    );
};

export default PhoneBar;