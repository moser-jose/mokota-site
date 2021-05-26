import React, { createContext, useState, useContext } from 'react';

export const StateContext = createContext();

export const StateAllContext = ({ children }) => {
    const projetos = {
        data: [

            {
                id: 1,
                foto: 1,
                titulo: 'App Hinário Adventista do 7º Dia',
                num_categoria: 3,
                categoria: 'App Mobile',
                descricao: 'Este é um projecto de um App Mobile que traz todos os 610 hinos do Hinário Adventista do 7º dia, com os seus respectivos autores, compositores e textos bíblicos',
                site: 'https://hinario-adventista.vercel.app/',
                tipo_projeto: 'Open',
                slug: 'app-hinario-adventista-do-7-dia'
            }
        ]
    }
    const [menu, setMenu] = useState(false);
    const [sobre, setSobre] = useState(false);
    const [servicos, setServicos] = useState(false);
    const [portfolio, setPortfolio] = useState(false);
    const [contacto, setContacto] = useState(false);

    return (
        <StateContext.Provider
            value={{ projetos, menu, setMenu, sobre, setSobre, servicos, setServicos, portfolio, setPortfolio, contacto, setContacto }}>
            {children}
        </StateContext.Provider>
    );
};

export const useAllContext = () => useContext(StateContext);
