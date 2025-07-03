import React from "react";
import { Index } from './../../componentes/Index';
import { Categoria } from './Form';

export default function CategoriaInit() {
  const config = {
    rotaModulo: "http://localhost:3000/api/produtos",
    nomeModulo: "Produto",
    campos: [
      { nome: "id", label: "Id", type: "number", required: false },
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
    ],
  };

  return <Index config={config} FormComponent={Categoria} />;
}
