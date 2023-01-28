import React from 'react';
import reword from'../../assests/reword.png'

const RewordSection = () => {
    return (
        <div className='grid grid-cols-1 items-center my-28 lg:grid-cols-2'>
        <div className=''>
         <h1 className='text-2xl text-center lg:text-left  lg:text-5xl text-white font-bold'>Token Rewards Play to Earn</h1>
         <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>We empower developers to learn and help others, providing the means to earn rewards for your contributions.      
         
         </p>
         <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>We will be expanding the existing course format to a live, and more engaging format that’s hosted in the Metaverse. This will allow users to do live coding events, in which they can easily share their code/screen with an instructor or their peers, and interact with other students using chat, audio, or video.</p>
        </div>
        <div className=''>
         <img src={reword} className=" lg:w-80  lg:mx-auto" alt="" />
        </div>
     </div>
    );
};

export default RewordSection;