import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-lg p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-6xl font-extrabold text-purple-700'>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl my-6 font-bold text-center'>{price.name}</h5>
            <p className='underline text-white font-bold'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 w-full rounded-lg mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;