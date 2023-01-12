import React from "react";

const BtnComponent = (props) => {
    return (
        <div>
            <br></br>
            {props.status === 0 ? (
                <button className="stopwatch_start_btn" onClick={props.start}>
                    Start
                </button>
            ) : (
                ""
            )}

            {props.status === 1 ? (
                <div>
                    <button className="stopwatch_pause_btn" onClick={props.stop}>
                        Pause
                    </button>
                    <button className="stopwatch_reset_btn" onClick={props.reset}>
                        Reset
                    </button>
                </div>
            ) : (
                ""
            )}

            {props.status === 2 ? (
                <div>
                    <button className="stopwatch_resume_btn" onClick={props.resume}>
                        Continue{" "}
                    </button>
                    <button className="stopwatch_reset_btn" onClick={props.reset}>
                        Reset
                    </button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
export default BtnComponent;
