import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound } from "./componentes/NotFound";
import { Navbar } from "./componentes/Navbar";
import CategoriaInit from "./views/categoria/Init";
import { Dashboard } from "./componentes/Dashboard";
import ProdutoInit from "./views/produto/Init";
import EstoqueInit from "./views/estoque/Init";
import MarcaInit from "./views/marca/Init";
import FormaPagamentoInit from "./views/formapagamento/Init";
import UnidadeMedidaInit from "./views/unidademedida/Init";
import CompraInit from "./views/compra/Init";
import UsuarioInit from "./views/usuario/Init";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/produto" element={<ProdutoInit />} />
        <Route path="/estoque" element={<EstoqueInit />} />
        <Route path="/marca" element={<MarcaInit />} />
        <Route path="/formapagamento" element={<FormaPagamentoInit />} />
        <Route path="/unidademedida" element={<UnidadeMedidaInit />} />
        <Route path="/categoria" element={<CategoriaInit />} />
        <Route path="/compra" element={<CompraInit />} />
        <Route path="/usuario" element={<UsuarioInit />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
