import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound } from "./componentes/NotFound";
import { Form } from "./componentes/Form";
import { Navbar } from "./componentes/Navbar";
import { Products } from "./componentes/Products";
import { Estoque } from "./componentes/Estoque";
import { Home } from "./componentes/Home";
import { Marca } from "./componentes/Marca";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/categoria" element={<Categoria />} />
          <Route path="/compra" element={<Compra />} />
          <Route path="/formapagamento" element={<FormaPagamento />} />
          <Route path="/unidademedida" element={<UnidadeMedida />} />
          <Route path="/marca" element={<Marca />} />
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
