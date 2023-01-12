import React, { useEffect, useState } from "react";

const UseEffectex = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        alert("Button is Clicked");
        console.log('Button is clicked');
    }, [num]);
    return (
        <div>
            <br></br>
            <button
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                Click Me {num}
            </button>
            <br></br>
            <button
                onClick={() => {
                    setNums(nums + 1);
                }}
            >
                Click Me {nums}
            </button>
        </div>
    );
};

export default UseEffectex;
