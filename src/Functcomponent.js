import React from "react";
function Functcomponent(p) {
    const red = () => {
        alert("Hello this is a  Function component");
    }
    return <div>
        <button onClick={red}>{p.text}</button>
    </div >
}
export default Functcomponent;