import React from 'react';
import binance from "../../assests/Binance.png"
import chainlink from "../../assests/Chainlink.png"
import alchemy from "../../assests/alchemy.png"
import neo from "../../assests/neo.png"

const ImageBox = () => {
   

    

    return (
        <div className='grid grid-cols-4 gap-10 items-center'>
            <div>
                <img src={binance} alt="" />
            </div>
            <div>
                <img src={chainlink} alt="" />
            </div>
            <div>
                <img src={alchemy} alt="" />
            </div>
            <div>
                <img src={neo} alt="" />
            </div>
           
        </div>
    );
};

export default ImageBox;