import React, { useState, useEffect } from "react";
import DisplayNumData from "./DisplayNumData";

const Subtraction = (props) => {
    const [ans, setAns] = useState();
    useEffect(() => {
        setAns(props.numb1 - props.numb2);
    }, [props]);

    return (
        <div>
            <DisplayNumData ans={ans} tit="Subtraction"></DisplayNumData>
        </div>
    );
};

export default Subtraction;
