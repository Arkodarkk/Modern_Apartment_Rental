import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import LogementPage from './pages/LogementPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Gestion dynamique des Routes vers les pages logement en fonction de leur id */}
        <Route path="/logements/:id" element={<LogementPage />} />
        {/* path="*" est la route par défaut si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;