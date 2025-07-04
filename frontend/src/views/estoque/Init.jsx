import React from "react";
import { Index } from './../../componentes/Index';
import { Estoque } from './Form';

export default function EstoqueInit() {
  const config = {
    rotaModulo: "http://localhost:3000/api/estoque",
    nomeModulo: "Estoque",
    campos: [
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
    ],
  };

  return <Index config={config} FormComponent={Estoque} />;
}
