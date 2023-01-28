import React from 'react';

const NewsCard = ({ image, title }) => {
    return (
        <div className=''>
            <img src={image} alt="" />
            <p className='text-xl font-semibold text-white my-3 text-center lg:text-left'>{title}</p>
            <p className='text-lg font-semibold text-gray-500 my-3 text-center lg:text-left'>2022-08-31</p>
            <div className='text-center lg:text-left'> <button className='text-lg  rounded-md'><p className='font-semibold text-transparent text-xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Readmore...</p></button></div>
           
        </div>
    );
};

export default NewsCard;