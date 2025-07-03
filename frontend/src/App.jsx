import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound } from "./componentes/NotFound";
import { Navbar } from "./componentes/Navbar";
import { Home } from "./componentes/Home";
import { Produto } from "./views/produto/Form";
import { Estoque } from "./views/estoque/Form";
import { FormaPagamento } from "./views/formapagamento/Form";
import { Marca } from "./views/marca/Form";
import { UnidadeMedida } from "./views/unidademedida/Form";
import { Categoria } from "./views/categoria/Form";
import { Usuario } from "./views/usuario/Form";
import { Compra } from "./views/compra/Form";
import CategoriaInit from "./views/categoria/Init";


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/marca" element={<Marca />} />
        <Route path="/formapagamento" element={<FormaPagamento />} />
        <Route path="/unidademedida" element={<UnidadeMedida />} />
        <Route path="/categoria" element={<CategoriaInit />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
