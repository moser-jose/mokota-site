import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { cursos, userLogin, userLogout, alunosAll, validarToken, usuariosGet, usuarioGet, updateState } from '../api';
import { useNavigate } from 'react-router-dom';
export const StateContext = createContext();
export const StateAuthContext = ({ children }) => {
    const navigate = useNavigate();
    const [autenticado, setAutenticado] = useState(false);
    const [cursosDados, setCursosDados] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userOn, setUserOn] = useState(null);
    const [usuariosDados, setUsuariosDados] = useState(null);
    const [alunosDados, setAlunosDados] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState([])

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
            setCursosDados(null);
            setError(null);
            /* setLoading(false); */
            setAutenticado(false);
            window.localStorage.removeItem('token');
            navigate('/minha-conta');
        },
        [navigate],
    );

    async function getCursos(token) {
        const { url, options } = cursos(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setCursosDados(json.cursos);
        setAutenticado(true);
    }
    async function getAlunos(token) {
        const { url, options } = alunosAll(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setAlunosDados(json.alunos);
        setAutenticado(true);

    }
    async function getUsuarios(token) {
        const { url, options } = usuariosGet(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setUsuariosDados(json.usuarios);
        setAutenticado(true);

    }
    async function getUsuario(token, email) {
        const { url, options } = usuarioGet(token, { email });
        const response = await fetch(url, options);
        const json = await response.json();
        setUserOn(json.usuario);
        setAutenticado(true);

    }
    async function login(email, senha) {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = userLogin({ email, senha });
            const response = await fetch(url, options);
            const { sucesso, token, mensagem } = await response.json();
            setError({
                cod: sucesso,
                mensagem: mensagem
            });
            if (sucesso === 4) {
                window.localStorage.setItem('token', token);
                await getCursos(token);
                await getAlunos(token);
                await getUsuarios(token);
                await getUsuario(token, email);
                navigate('/dashboard');
            }
        } catch (err) {
            setError({
                cod: 0,
                mensagem: [err.message]
            });
            setAutenticado(false);
        } finally {
            setLoading(false);

        }
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
                        await getCursos(token);
                        await getAlunos(token);
                        await getUsuarios(token);
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
            value={{ loading, autenticado, updateStateUser, error, userOn, usuariosDados, cursosDados, alunosDados, setError, login, logout, setAutenticado }}>
            {children}
        </StateContext.Provider>
    );
};

export const useAuthContext = () => useContext(StateContext);
