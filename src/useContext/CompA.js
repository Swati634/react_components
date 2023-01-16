import React, { createContext } from 'react'
import CompB from './CompB'

const BioData = createContext();
const CompA = () => {
    return (
        <div>
            <BioData.Provider value={"Good Health"}>
                <CompB />
            </BioData.Provider>
        </div>
    )
}

export default CompA
export { BioData }
