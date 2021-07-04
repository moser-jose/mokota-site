import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Curso from '../pages/Curso_Mobile/Main'
import Cursos from '../pages/Cursos'
import Privacidade from '../pages/Main/Privacidade'
import Termos from '../pages/Main/Termos'
import NotFound from '../components/404';
import Certificados from '../components/Cursos/Certificados';
import DadosProjectos from '../components/Main/DadosProjectos';

const RouterMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/desenvolvimento_de_aplicativos" element={<Curso />} />
            <Route path="/curso/:slug" element={<Curso />} />
            <Route path="/cursos/certificados" element={<Certificados />} />
            <Route path="privacidade" element={<Privacidade />} />
            <Route path="termos" element={<Termos />} />
            <Route path="projectos/:slug" element={<DadosProjectos />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default RouterMain