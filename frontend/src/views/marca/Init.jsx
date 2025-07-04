import React from "react";
import { Index } from './../../componentes/Index';
import { Marca } from './Form';

export default function MarcaInit() {
  const config = {
    rotaModulo: "http://localhost:3000/api/marca",
    nomeModulo: "Marca",
    campos: [
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
    ],
  };

  return <Index config={config} FormComponent={Marca} />;
}
