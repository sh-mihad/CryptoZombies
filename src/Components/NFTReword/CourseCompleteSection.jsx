import React from 'react';
import victory from '../../assests/couseComlete.png'

const CourseCompleteSection = () => {
    return (
        <div className='grid grid-cols-1 items-center my-28 lg:grid-cols-2 '>
            <div className=''>
                <img src={victory} className="w-80 mx-auto" alt="" />
            </div>
            <div className=''>
                <h1 className='text-3xl text-center lg:text-left  lg:text-5xl text-white font-bold'>Course Completion NFTs</h1>
                <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>Rollout NFT certificates for course completion, each user will get a personalized NFT certificate for the courses they <br /> complete.

                </p>
                
            </div>

        </div>
    );
};

export default CourseCompleteSection;