//using UseEffect -> We can rerender the all data of the component
// import React, { useEffect, useState } from 'react'

// const UseEffectVSUseMemo = () => {
//     const [count, setCount] = useState(0)
//     const [data, setData] = useState(0)
//     useEffect(() => {
//         console.log(Math.random());
//     }, [data])
//     return (
//         <div>
//             <h2>{count}</h2>
//             <h2>{data}</h2>
//             <h1>UseEffect VS UseMemo</h1>
//             <button onClick={() => { setCount(count + 1) }}>Update Count</button>
//             <button onClick={() => { setData(data + 1) }}>Update Data</button>

//         </div>
//     )
// }

// export default UseEffectVSUseMemo
// Using UseMemo-> We can rerender the specific part of the component

import React, { useState, useMemo } from "react";

const UseEffectVSUseMemo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState();

    const NoRender = useMemo(() => {
        return (
            <div>
                <h3 style={{ color: "blue" }}>
                    No react again{count}--- {name}
                </h3>
                <h3 style={{ color: "blue" }}>UseEffect Vs UseMemo</h3>
            </div>
        );
    }, [name]);

    return (
        <div>
            {NoRender}
            <h3>Render it again and again{count}</h3>
            <h3>UseEffect Vs UseMemo</h3>

            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click
            </button>
            <button
                onClick={() => {
                    setName("hello");
                }}
            >
                Click Me
            </button>
        </div>
    );
};

export default UseEffectVSUseMemo;
