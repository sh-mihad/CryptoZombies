import React from 'react';
import group1Image from '../../assests/Group 1421.png'

const Header = () => {
    return (
        <div className='grid grid-cols-1 items-center my-10 lg:grid-cols-2'>
           <div className=''>
            <h1 className='text-2xl text-center lg:text-left  lg:text-5xl text-white font-bold'>Learn to Code Blockchain DApps by Building Simple <br  className='hidden lg:block'/>  Games</h1>
            <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>CryptoZombies is an interactive school that teaches you all things technical about blockchains. Learn to write smart contracts by making your own crypto-collectibles game.</p>
           <div className='text-center lg:text-left'> <button className='bg-gradient-to-r from-green-400 to-blue-500 px-12 py-3  text-white rounded-md'>Courses</button></div>
           </div>
           <div className=''>
            <img src={group1Image} alt="" />
           </div>
        </div>
    );
};

export default Header;