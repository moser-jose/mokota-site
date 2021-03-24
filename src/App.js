
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./pages/Main/Main"
import MinhaConta from './pages/Admin/Login'
import Dashboard from './pages/Admin/Dashboard'
import Curso from './pages/Curso_Mobile/Main'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/curso/react-native-completo" element={<Curso />} />
          <Route path="minha-conta" element={<MinhaConta />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;
