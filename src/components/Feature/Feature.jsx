import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center gap-2'>
            <CheckCircleIcon className="h-4 w-4 text-purple-700" ></CheckCircleIcon>
            <span>{feature}</span>
        </div>
    );
};

export default Feature;