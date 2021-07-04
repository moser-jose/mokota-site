import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { validarToken, usuarioGet, updateState } from '../api';
import { useNavigate } from 'react-router-dom';
export const StateContext = createContext();
export const StateAuthContext = ({ children }) => {
    const navigate = useNavigate();
    const [autenticado, setAutenticado] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userOn, setUserOn] = useState(null);
    const [error, setError] = useState(null);

    async function updateStateUser() {
        try {
            const token = window.localStorage.getItem('token');
            if (token) {
                const { url, options } = validarToken(token);
                const response = await fetch(url, options);
                const { sucesso, email } = await response.json();
                if (sucesso === 4) {
                    const { url, options } = updateState(token, { email });
                    const response = await fetch(url, options);
                    const { sucesso } = await response.json();
                    if (sucesso !== 4) {
                        logout();
                    }
                }
                else logout();
            }
        } catch (err) {
            logout();
        }
    }
    const logout = useCallback(
        async function () {
            setError(null);
            setLoading(false);
            setAutenticado(false);
            window.localStorage.removeItem('token');
            navigate('/');
        },
        [navigate],
    );

    async function getUsuario(token, email) {
        const { url, options } = usuarioGet(token, { email });
        const response = await fetch(url, options);
        const json = await response.json();
        setUserOn(json.usuario);
        setAutenticado(true);

    }

    useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options } = validarToken(token);
                    const response = await fetch(url, options);
                    const { sucesso, email, mensagem } = await response.json();
                    setError({
                        cod: sucesso,
                        mensagem: mensagem
                    });
                    if (sucesso === 4) {
                        setAutenticado(true);
                        await getUsuario(token, email);
                    }
                    else {
                        logout();
                    }
                } catch (err) {
                    logout();
                } finally {
                    setLoading(false);
                }
            }
            else {
                setAutenticado(false);
            }

        }
        autoLogin();
    }, [logout, navigate]);

    return (
        <StateContext.Provider
            value={{
                loading,
                autenticado,
                updateStateUser,
                error,
                userOn,
                setError,
                logout,
                setAutenticado
            }}>
            {children}
        </StateContext.Provider>
    );
};

export const useAuthContext = () => useContext(StateContext);
