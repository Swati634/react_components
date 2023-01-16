// import React, { useState } from 'react'


// const UseReducer = () => {
//     const [count, setCount] = useState(1);
//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={() => setCount(count + 1)}>Inc</button>
//             <button onClick={() => setCount(count - 1)}>Dec</button>
//         </div>
//     )
// }

// export default UseReducer

import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>

        </div>
    )

}


export default UseReducer;
