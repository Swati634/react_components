import React, { useState } from "react";

const Gettime = () => {
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    };
    return (
        <div>
            <h4>Get Current Time Using Usestate Hook</h4>
            <h1>{ctime}</h1>
            <button onClick={UpdateTime}>Get Time</button>
        </div>
    );
};

export default Gettime;
