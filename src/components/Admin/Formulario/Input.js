import React from 'react'
const Input = ({ label, type, name, value, onChange, onBlur, placeholder }) => {
    return (
        <div className="Container">
            <label htmlFor={name} className="label">
                {label}
            </label>
            <input
                id={name}
                name={name}
                className="input"
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
};

export default Input;
