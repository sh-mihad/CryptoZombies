import React from 'react';
import victoryImage from '../../assests/victory.png'

const CourseFormatSection = () => {
    return (
        <div className='grid grid-cols-1 items-center my-10 lg:grid-cols-2'>
           <div className=''>
            <h1 className='text-2xl text-center lg:text-left  lg:text-5xl text-white font-bold'>Expand the Course Format</h1>
            <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>CryptoZombies is an interactive school that teaches you all things technical about blockchains. Learn to write smart contracts by making your own crypto-collectibles game.
            
            
            </p>
            <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>And you know the best part? Everything is completely free!</p>
           <div className='text-center lg:text-left'> <button className='bg-gradient-to-r from-green-400 to-blue-500 px-12 py-3  text-white rounded-md'>Courses</button></div>
           </div>
           <div className=''>
            <img src={victoryImage} className="mx-0 lg:mx-20" alt="" />
           </div>
        </div>
    );
};

export default CourseFormatSection;