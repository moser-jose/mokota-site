import React, { createContext, useState, useContext, useEffect } from 'react';
import { alunosGet } from '../api';
export const StateContext = createContext();

export const StateUserContext = ({ children }) => {
    const [cursos, setCursos] = useState([]);
    const [data, setData] = useState([]);
    async function handleGetAlunos() {
        const { url, options } = alunosGet();
        const response = await fetch(url, options);
        return response.json().then(f => {
            setCursos(f.cursos);
        });
    }
    useEffect(() => {
        handleGetAlunos();
    }, []);
    return (
        <StateContext.Provider
            value={{ cursos, setCursos }}>
            {children}
        </StateContext.Provider>
    );
};

export const useUserContext = () => useContext(StateContext);
