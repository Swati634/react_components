import React, { useContext } from 'react'
import { BioData } from './CompA'

const CompC = ({ name }) => {
    const channelName = useContext(BioData);
    return (
        <div>
            <h3>Hello Component C {channelName}</h3>
        </div>
    )
}

export default CompC
