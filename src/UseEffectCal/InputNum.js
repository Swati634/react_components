import React, { useState } from "react";
import AddNumber from "./AddNumber";
import Mul from "./Mul";
import Subtraction from "./Subtraction";

const InputNum = () => {
    const [valOne, setValOne] = useState();
    const [valTwo, setValTwo] = useState();

    return (
        <div>
            <center>
                <h4>Operation Perform On Two Numbers</h4>
            </center>
            <center>
                <div className="num_operation">
                    <span> Number 1:</span>
                    <input
                        type="number"
                        onChange={(e) => setValOne(parseInt(e.target.value))}
                        value={valOne}
                    />
                    <span> Number 2:</span>{" "}
                    <input
                        type="number"
                        onChange={(e) => setValTwo(parseInt(e.target.value))}
                        value={valTwo}
                    />
                </div>
            </center>
            <br></br>
            <AddNumber num1={valOne} num2={valTwo} />
            <Subtraction numb1={valOne} numb2={valTwo} />
            <Mul numb1={valOne} numb2={valTwo} />
        </div>
    );
};

export default InputNum;
