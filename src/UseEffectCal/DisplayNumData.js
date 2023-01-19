import React from "react";

const DisplayNumData = (props) => {
    return (
        <div>
            <center>
                {props.tit}
                <br></br>
                {props.ans}
            </center>
        </div>
    );
};

export default DisplayNumData;
