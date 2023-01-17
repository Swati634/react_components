import React, { useRef } from 'react'

const Userefhook = () => {

    const inpref = useRef(null)
    const handleInput = () => {
        console.log("function called")
        inpref.current.style.color = "#FF0000"
        inpref.current.style.background = "#87CEEB"
        inpref.current.value = "1000"
        inpref.current.style.border = '1px solid'
        inpref.current.focus()
    }

    return (
        <div>
            <input type="text" ref={inpref}></input>
            <button onClick={handleInput}>GetTheData</button>
        </div>
    )
}

export default Userefhook

