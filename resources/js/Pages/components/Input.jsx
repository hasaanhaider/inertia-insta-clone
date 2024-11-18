import React from "react";

const Input = ({ placeholder, type, id, name }) => {
    return <input className="input-group" type={type} name={name} id={id} placeholder={placeholder} />;
};

export default Input;
