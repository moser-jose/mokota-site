import React from 'react';
import { usePlayContext } from '../../../contexts/PlayContext';

const Checbox = ({ name, label }) => {
    const { error, setError } = usePlayContext();
    return (
        <>
            <input type="checkbox" /* onClick={setError({ cod: 3 })} */ name={name} id={name} className="checkbox" />
            <label htmlFor={name} className="check">
                {label}
                <div className="checked"></div>
            </label>

        </>
    );
};

export default Checbox;