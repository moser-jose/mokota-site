import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main/Main'
import MinhaConta from '../pages/Admin/Login'
import Dashboard from '../pages/Admin/Dashboard'
import Curso from '../pages/Curso_Mobile/Main'
import Cursos from '../pages/Cursos'
import Privacidade from '../pages/Curso_Mobile/Privacidade'
import Termos from '../pages/Curso_Mobile/Termos'
import Print from '../components/Curso_Mobile/Print'
import { StateUserContext } from '../contexts/UserContext';
import NotFound from '../components/404';
import Inscritos from '../pages/Admin/Inscritos';
export default function RouterMain() {
    return (

        <StateUserContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cursos/desenvolvimento_de_aplicativos" element={<Curso />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/print" element={<Print/>} />
                    <Route path="/cursos/certificados" element={<Cursos />} />
                    <Route path="/minha-conta" element={<MinhaConta />} />
                    <Route path="/privacidade" element={<Privacidade />} />
                    <Route path="/termos" element={<Termos />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/dashboard/curso/:slug" element={<Inscritos />} />
                    <Route path="/dashboard/*" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </StateUserContext>
    )
}
