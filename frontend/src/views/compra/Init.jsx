import React from "react";
import { Index } from './../../componentes/Index';
import { Compra } from './Form';

export default function CompraInit() {
  const config = {
    rotaModulo: "http://localhost:3000/api/compras",
    nomeModulo: "Compra",
    campos: [
      { nome: "id", label: "Id", type: "number", required: false },
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
      { nome: "cpfComprador", label: "Cpf do Comprador", type: "text", required: true },
      { nome: "valorTotal", label: "Valor Total", type: "number", required: true },
      { nome: "formaPagamentoId", label: "Forma de Pagamento", type: "select", required: true },
    ],
  };

  return <Index config={config} FormComponent={Compra} />;
}
