import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main/Main'
import MinhaConta from '../pages/Admin/Login'
import Dashboard from '../pages/Admin/Dashboard'
import Curso from '../pages/Curso_Mobile/Main'
import Cursos from '../pages/Cursos'
import Privacidade from '../pages/Curso_Mobile/Privacidade'
import Termos from '../pages/Curso_Mobile/Termos'
import Print from '../components/Curso_Mobile/Print'
import NotFound from '../components/404';
import Inscritos from '../pages/Admin/Inscritos';
import RecuperarSenha from '../pages/Admin/RecuperarSenha';
import Certificados from '../components/Cursos/Certificados';
import DadosProjectos from '../components/Main/DadosProjectos';

const RouterMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/desenvolvimento_de_aplicativos" element={<Curso />} />
            <Route path="/print" element={<Print/>} />
            <Route path="/cursos/certificados" element={<Certificados/>} />
            <Route path="/recuperar-senha" element={<RecuperarSenha/>} />
            <Route path="/cursos/certificados" element={<Cursos/>} />
            <Route path="minha-conta" element={<MinhaConta />} />
            <Route path="privacidade" element={<Privacidade/>} />
            <Route path="termos" element={<Termos/>} />
            <Route path="projectos/:slug" element={<DadosProjectos/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/curso/:slug" element={<Inscritos />} />
            <Route path="/dashboard/*" element={<NotFound/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default RouterMain