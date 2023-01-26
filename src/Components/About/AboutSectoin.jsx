import React from 'react';
import AvatarGroup from '../AvatarGroup/AvatarGroup';

const AboutSectoin = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
            <div>
                <h1 className='text-3xl text-center lg:text-left  lg:text-5xl text-white font-bold'>Why CryptoZombies is Different </h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <div className='mx-auto'>
                        <AvatarGroup></AvatarGroup>
                        <p className='text-lg text-gray-400 text-center'>Students</p>
                    </div>
                    <div>
                        <h1 className='text-4xl text-center lg:text-left  lg:text-5xl text-white font-bold mt-10 mb-3'>1M+</h1>
                        <p className='text-lg text-gray-400 text-center'>Classes Completed</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-lg leading-9 text-gray-400 my-5 lg:my-10 text-center lg:text-left'>CryptoZombies is the largest education platform for blockchain development, it’s been around for 4+ years, with over 400k registered users that have finished multiple courses.</p>
                <p className='text-lg leading-9 text-gray-400 my-5 lg:my-10 text-center lg:text-left'>CryptoZombies was the first tutorial on the internet for NFTs, and is still very relevant to the new crop of web3 developers looking to enter the industry today. Currently the CryptoZombies curriculum is mostly focused on Ethereum and Solidity development, but is a lot of demand for content targeting other chains such as Binance, TRON, and even projects like Chainlink.</p>
            </div>
        </div>
    );
};

export default AboutSectoin;