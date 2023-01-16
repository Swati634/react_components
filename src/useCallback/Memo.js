import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    const IncrementOne = () => {
        setcounterOne(counterOne + 1)
    }
    const IncrementTwo = () => {
        setcounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(() => {
        console.warn("==hello memo value")
        let i = 0;
        while (i < 200000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <br></br> <button class="btn btn-primary" onClick={IncrementOne}>counterOne - {counterOne} </button>
            <span>{isEven ? "Even" : "odd"}</span>
            <button class="btn btn-primary" onClick={IncrementTwo}>counterTwo - {counterTwo}</button>

        </div>
    )
}

export default Memo
