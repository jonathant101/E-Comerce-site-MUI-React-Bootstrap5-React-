import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import Catalogo from './components/Catalogo';
import Usuario from './components/Usuario';

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Catalogo />} path="/catalogo" />
        <Route element={<Usuario />} path="/usuario" />
      </Routes>
    </Router>
  );
}
