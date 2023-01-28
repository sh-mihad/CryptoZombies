import React from 'react';
import NewsCard from './NewsCard';
import blog_1 from '../../assests/blog-1.png'
import blog_2 from '../../assests/blog-2.png'
import blog_3 from '../../assests/blog-3.png'
import blog_4 from '../../assests/blog-4.png'
import blog_5 from '../../assests/blog-5.png'
import blog_6 from '../../assests/blog-6.png'

const NewSection = () => {
    return (
        <div className='my-28'>
            <div className='my-11'>
            <h1 className='text-3xl text-center  lg:text-left  lg:text-5xl text-white font-bold'>Latest News</h1>
            <p className='text-lg text-gray-400  mt-4 mb-22    text-center lg:text-left'>Insights from our team, user success stories, and how to get started.
            </p>
            </div>

            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-14 '>
            <NewsCard 
            image={blog_5}
            title ={"Sept sees return of popular online Solidity workshop - CryptoZombies Live"}
            ></NewsCard>
            <NewsCard 
            image={blog_6}
            title ={"Sept sees return of popular online Solidity workshop - CryptoZombies Live"}
            ></NewsCard>
            <NewsCard 
            image={blog_1}
            title ={"Sept sees return of popular online Solidity workshop - CryptoZombies Live"}
            ></NewsCard>
            <NewsCard 
            image={blog_2}
            title ={"Sept sees return of popular online Solidity workshop - CryptoZombies Live"}
            ></NewsCard>
            <NewsCard 
            image={blog_3}
            title ={"Sept sees return of popular online Solidity workshop - CryptoZombies Live"}
            ></NewsCard>
            <NewsCard 
            image={blog_4}
            title ={"Sept sees return of popular online Solidity workshop - CryptoZombies Live"}
            ></NewsCard>
            </div>

            <div className='text-center my-14'> <button className='bg-gradient-to-r from-green-400 to-blue-500 px-12 py-3  text-white rounded-md'>View all Post</button></div>
           
            
        </div>
    );
};

export default NewSection;