import React, { useEffect, useState } from "react";

const UseEffe = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `chats(${count})`;
    });
    console.log("Hello UseEffect");
    return (
        <div>
            <h1>chats{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

export default UseEffe;
