import React from "react";
import { Index } from './../../componentes/Index';
import { UnidadeMedida } from './Form';

export default function UnidadeMedidaInit() {
  const config = {
    rotaModulo: "http://localhost:3000/api/unidademedida",
    nomeModulo: "Unidade de Medida",
    campos: [
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
    ],
  };

  return <Index config={config} FormComponent={UnidadeMedida} />;
}
