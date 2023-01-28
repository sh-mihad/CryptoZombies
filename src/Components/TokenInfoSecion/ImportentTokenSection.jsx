import React from 'react';
import importentOfToken from '../../assests/$coin.png'

const ImportentTokenSection = () => {
    return (
        <div className='grid grid-cols-1 items-center my-28 lg:grid-cols-2 '>
            <div className=''>
                <img src={importentOfToken} className=" lg:mx-auto" alt="" />
            </div>
            <div className=''>
                <h1 className='text-2xl text-center lg:text-left  lg:text-5xl text-white font-bold'>Why token is Important</h1>
                <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>CryptoZombies will be introducing a token that is going to be utilized in “Play to Earn” strategy. The token will be used to incentivize users to complete courses, and use the CZ site or mobile apps daily to interact with the CZ community.

                </p>
                <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>The CZ tokens will be bought back and burned when users pay for courses.</p>
            </div>

        </div>
    );
};

export default ImportentTokenSection;