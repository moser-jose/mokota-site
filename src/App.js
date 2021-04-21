
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./pages/Main/Main"
import MinhaConta from './pages/Admin/Login'
import Dashboard from './pages/Admin/Dashboard'
import Inscritos from './pages/Admin/Inscritos'
import Curso from './pages/Curso_Mobile/Main'
import Privacidade from './pages/Curso_Mobile/Privacidade'
import Termos from './pages/Curso_Mobile/Termos'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Curso />} />
          <Route path="/curso/react-native-completo" element={<Curso />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="minha-conta" element={<MinhaConta />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/inscritos" element={<Inscritos />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;
