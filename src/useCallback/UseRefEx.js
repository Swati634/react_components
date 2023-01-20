import React, { useRef, useState } from 'react'

const UseRefEx = () => {
    const [num, setNum] = useState()
    const inpEl = useRef("")

    const changeStyle = () => {
        inpEl.current.style.background = "#BF40BF"
        inpEl.current.style.color = "#87CEEB"
        inpEl.current.focus()
    }

    return (
        <div>
            <input ref={inpEl} type="text" value={num} onChange={(e) => setNum(e.target.value)} />
            <button onClick={changeStyle}>Click Me</button>
        </div>
    )
}

export default UseRefEx
