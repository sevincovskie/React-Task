import React, {useState} from "react";

const Toggle = () => {
    const [toggle, setToggle] = useState (false);
    const handleToggle = ()=> {
        setToggle(!toggle)
    };

    const buttonStyle = {
        backgroundColor: toggle ? "black" : "purple",
        color: "white",
        width:"100px",
        height:"100px",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    };
    return (
        <button style={buttonStyle} onClick={handleToggle}>{ toggle ? "on": "off"}</button>
    )
}

export default Toggle;