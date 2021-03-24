import React from 'react';

const Checbox = ({ name, label }) => {
    return (
        <>
            <input type="checkbox" name={name} id={name} className="checkbox" />
            <label htmlFor={name} className="check">
                {label}
                <div className="checked"></div>
            </label>

        </>
    );
};

export default Checbox;