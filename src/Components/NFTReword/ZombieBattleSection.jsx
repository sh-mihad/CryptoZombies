import React from 'react';
import zombieBattle from '../../assests/zombieBattle.png'

const ZombieBattleSection = () => {
    return (
        <div className='grid grid-cols-1 items-center my-28 lg:grid-cols-2 '>
        <div className=''>
         <h1 className='text-2xl text-center lg:text-left  lg:text-5xl text-white font-bold'>Zombie BattleGround Cards</h1>
         <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>CryptoZombies will be introducing a token that is going to be utilized in “Play to Earn” strategy.
         </p>
         <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>The token will be used to incentivize users to complete courses, and use the CZ site or mobile apps daily to interact with the CZ community.</p>
         <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>We intend to expand the current CZ community by moving it from Telegram to our own iOS & Android apps that will let users chat about blockchain development, and ask questions in a StackOverflow type format.</p>
        </div>
        <div className=''>
         <img src={zombieBattle} className=" lg:w-96  lg:mx-auto" alt="" />
        </div>
     </div>
    );
};

export default ZombieBattleSection;