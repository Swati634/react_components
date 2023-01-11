import React from "react";


class Classcomp extends React.Component {
    // constructor() {
    //     super()
    // }
    red = () => {
        alert("Hi this is a class component");
    }

    render() {
        return (
            <div>
                <button onClick={this.red}>Class Component</button>
            </div>
        )
    }
}
export default Classcomp;