import React from "react";
import { Index } from './../../componentes/Index';
import { FormaPagamento } from './Form';

export default function FormaPagamentoInit() {
  const config = {
    rotaModulo: "http://localhost:3000/api/formapagamento",
    nomeModulo: "Forma de Pagamento",
    campos: [
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
    ],
  };

  return <Index config={config} FormComponent={FormaPagamento} />;
}
