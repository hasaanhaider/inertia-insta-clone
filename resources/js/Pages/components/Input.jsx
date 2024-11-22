import React from "react";

const Input = ({ placeholder, type, id, value, handleChange ,name }) => {
    return (
        <input
            className="input-group"
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default Input;
