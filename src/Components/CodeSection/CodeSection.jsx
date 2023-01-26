import React from 'react';
import coadingImage from '../../assests/Group 1383.png'

const CodeSection = () => {
    return (
        <div className='grid grid-cols-1 items-center my-10 lg:my-20 lg:grid-cols-2 '>
           <div className=''>
            <h1 className='text-3xl text-center lg:text-left  lg:text-5xl text-white font-bold'>Interactive Coding Lessons</h1>
            <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>In-browser step-by-step lessons take you from the very basics of Solidity to creating your own fully-functional blockchain-based game. Even by the end of Lesson 1 (which can be completed in one sitting), you'll know enough to officially call yourself a blockchain developer!</p>
           </div>
           <div className=''>
            <img src={coadingImage} className="" alt="" />
           </div>
        </div>
    );
};

export default CodeSection;