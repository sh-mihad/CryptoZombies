import React from 'react';
import RewordSection from './RewordSection';

const TokenInfoSection = () => {
    return (
        <div className='mb-32 '>
           <div className='mt-10 w-full lg:w-2/3 mx-auto'>
            <h1 className='text-3xl text-center   lg:text-5xl text-white font-bold'>Token Info</h1>
            <p className='text-xl text-gray-400 my-5 lg:my-4 text-center lg:mx-10'>The token will be used to incentivize users to complete courses, and interact with the CZ community.</p>
           </div>
           <RewordSection/>
        </div>
    );
};

export default TokenInfoSection;