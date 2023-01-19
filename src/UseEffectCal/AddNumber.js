import React, { useEffect, useState } from "react";
import DisplayNumData from "./DisplayNumData";

const AddNumber = (props) => {
    const [ans, setAns] = useState();
    useEffect(() => {
        setAns(props.num1 + props.num2);
    }, [props]);

    return (
        <div>
            <DisplayNumData ans={ans} tit="Addition" />
        </div>
    );
};

export default AddNumber;
