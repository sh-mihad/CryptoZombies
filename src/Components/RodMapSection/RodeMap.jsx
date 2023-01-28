
import React from 'react';
import TimelineSection from './TimelineSection';

const RodeMap = () => {
    return (
        <div className='my-32'>
            <div className='mt-10 w-full lg:w-2/3 mx-auto'>
            <h1 className='text-3xl text-center   lg:text-5xl text-white font-bold'>Roadmap</h1>
            <p className='text-xl text-gray-400 my-5 lg:my-4 text-center lg:mx-10'>The roadmap illustrates what we're working on. We are continuously updating it based on your feedback.</p>
           </div>
           <TimelineSection/>
        </div>
    );
};

export default RodeMap;