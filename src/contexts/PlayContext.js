import React, { createContext, useState, useContext } from 'react';

export const StateContext = createContext();

export const StatePlayContext = ({ children }) => {
    const projetos = {
        data: [

            {
                id: 1,
                foto: 1,
                titulo: 'App Hinário Adventista do 7º Dia',
                categoria: 'App Mobile',
                descricao: 'Este é um projecto de um App Mobile que traz todos os 610 hinos do Hinário Adventista do 7º dia, com os seus respectivos autores, compositores e textos bíblicos',
                site: 'https://hinario-adventista.vercel.app/',
                tipo_projeto: 'Open',
                slug: 'app-hinario-adventista-do-7-dia'
            }
        ]
    }
    const [playBubton, setPlayButton] = useState(false);
    const [eventButon, setEventButon] = useState(null);
    const [error, setError] = useState(null);

    return (
        <StateContext.Provider
            value={{ projetos, playBubton, setPlayButton, eventButon, setEventButon, error, setError }}>
            {children}
        </StateContext.Provider>
    );
};

export const usePlayContext = () => useContext(StateContext);
