import React, { useState } from "react";
import PropsExp from "./PropsExp";

const Input = () => {
    const [content, setContent] = useState();
    return (
        <div className="input_field">
            <spna>Content:</spna>
            <input
                type="text"
                onChange={(event) => setContent(event.target.value)}
                value={content}
            />
            <PropsExp con={content} />
        </div>
    );
};

export default Input;
