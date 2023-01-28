import React from 'react';
import zombieArmyImage from '../../assests/zombeArmy.png';

const ZombieArmySection = () => {
    return (
        <div className='grid grid-cols-1  items-center my-10 lg:my-20 lg:grid-cols-2 '>
            
            <div className=''>
            <img src={zombieArmyImage} className="mx-auto " alt="" />
           </div>
           <div className='mt-10'>
            <h1 className='text-2xl text-center lg:text-left  lg:text-5xl text-white font-bold'>Build a Zombie Army</h1>
            <p className='text-lg text-gray-400 my-5 lg:my-10 text-center lg:text-left'>After completing all lessons and deploying your DApp, pit your zombie army against other players' zombies in one of the world's first blockchain-based games! Half code-school, half MMO crypto-collectible strategy game.</p>
           </div>
        </div>
    );
};

export default ZombieArmySection;