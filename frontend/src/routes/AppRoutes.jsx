import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../componentes/Home';
import { NotFound } from '../componentes/NotFound';
import { Products } from '../componentes/Products';
import { Estoque } from '../componentes/Estoque';
import { Inventario } from '../componentes/Inventario';

export function AppRoutes() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/inventario" element={<Inventario />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );
};
