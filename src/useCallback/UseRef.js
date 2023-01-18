import React, { useState, useRef } from 'react'

const UseRef = () => {
    const [myData, setMyData] = useState("")

    const inputElem = useRef("")

    const changeStyle = () => {
        inputElem.current.style.backgroundColor = "#90EE90"
        inputElem.current.focus()

    }
    return (
        <div>
            <input ref={inputElem} type="text" value={myData} onChange={(e) => setMyData(e.target.value)}></input>
            <button onClick={changeStyle}>submit</button>

        </div>
    )

}
export default UseRef;

