import React from 'react';
import CourseCompleteSection from './CourseCompleteSection';
import ZombieBattleSection from './ZombieBattleSection';

const NftRewordSection = () => {
    return (
        <div className='mb-32 '>
        <div className='mt-10 w-full lg:w-2/3 mx-auto'>
         <h1 className='text-3xl text-center   lg:text-5xl text-white font-bold'>NFT Rewards</h1>
         <p className='text-xl text-gray-400 my-5 lg:my-4 text-center lg:mx-10'>NFT rewards will encourage engagement and long-term loyalty, helping us to create more active and engaged communities compared to existing education platforms.</p>
        </div>
        <ZombieBattleSection/>
        <CourseCompleteSection/>
     </div>
        
    );
};

export default NftRewordSection;