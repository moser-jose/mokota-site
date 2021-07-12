import React, { useEffect } from 'react'
const Input = ({ label, type, name, value, onChange, onBlur, placeholder, classN }) => {
    
      
    return (
        <div className="Container">
            <label htmlFor={name} className="label">
                {label}
            </label>
            {
                type === 'textarea' ?
                    <textarea
                        id={name}
                        name={name}
                        className={`input ${classN}`}
                        placeholder={placeholder}
                        value={value}
                        rows={5}
                        onChange={onChange}
                        onBlur={onBlur}
                    ></textarea> :
                    type === 'text' ||type === 'password' || type === 'email' || type === 'submit' ?
                        <input
                            id={name}
                            name={name}
                            className={`input ${classN}`}
                            type={type}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                        ></input> : <></>
            }
        </div>
    );
};

export default Input;
