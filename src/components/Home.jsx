import React, { useState } from 'react';
import { HiArrowCircleUp } from "react-icons/hi";

const Home = () => {
    const [inputVal, setInputVal] = useState();

    return (
        <>
            <div className='top-[400px] fixed flex items-center justify-center w-full'>
                <div className='flex justify-center items-center lg:w-[80%] sm:w-[90%] mx-auto'>
                    <input
                        onChange={(e) => setInputVal(e.target.value)}
                        type="text"
                        placeholder="What's on you mind? ☺️"
                        className="input input-xl h-[90px] rounded-3xl flex-1/2"
                    />
                    <HiArrowCircleUp className={`text-7xl ${inputVal ? "" : "hidden"} hover:cursor-pointer`}></HiArrowCircleUp>
                </div>
            </div>
        </>
    );
};

export default Home;