import React, { useState } from 'react';

const Home = () => {
    const [inputVal, setInputVal] = useState();
    console.log(typeof inputVal);
        
    return (
        <>
            <input onChange={(e) => setInputVal(e.target.value)} value={inputVal} type="text" placeholder="What's on you mind? ☺️" className="input input-xl h-[90px] -translate-x-1/2 left-1/2 w-[60%] mx-auto rounded-3xl top-[400px] fixed" />
        </>
    );
};

export default Home;