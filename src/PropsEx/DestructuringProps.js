import React from "react";

const DestructuringProps = (p) => {
    const { name, lname } = p;
    return (
        <div>
            <h4>
                {name} {lname}
            </h4>
        </div>
    );
};

export default DestructuringProps;
