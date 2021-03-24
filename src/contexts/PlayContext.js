import React, { createContext, useState, useContext } from 'react';

export const StateContext = createContext();

export const StatePlayContext = ({ children }) => {
    const [playBubton, setPlayButton] = useState(false);
    const [eventButon, setEventButon] = useState(null);

    return (
        <StateContext.Provider
            value={{ playBubton, setPlayButton,eventButon, setEventButon }}>
            {children}
        </StateContext.Provider>
    );
};

export const usePlayContext = () => useContext(StateContext);
