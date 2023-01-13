import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        return () => clearInterval(id.current);
    }, []);

    let id = useRef();

    function handelTime() {
        id.current = setInterval(() => {
            setTime((prev) => prev + 1);
            console.log(time, 'time');
        }, 1000);
    }

    return (
        <div className='Stopwatch'>
            <h1>Hello Everyone This is my Stopwatch demo</h1>
            <h1>{time}</h1>
            <button onClick={() => handelTime()}>Start</button>
            <button onClick={() => clearInterval(id.current)}>Pause</button>
            <button onClick={() => {
                clearInterval(id.current);
                setTime(0);
            }}>Reset</button>
        </div>
    )
}

export default Stopwatch
