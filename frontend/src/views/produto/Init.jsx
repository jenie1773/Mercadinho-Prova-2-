import React from "react";
import { Index } from './../../componentes/Index';
import { Produto } from './Form';

export default function ProdutoInit() {
  const config = {
    rotaModulo: "http://localhost:3000/api/produto",
    nomeModulo: "Produto",
    campos: [
      { nome: "id", label: "Id", type: "number", required: false },
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
      { nome: "marcaId", label: "Marca", type: "select", required: true },
      { nome: "imagem", label: "Imagem", type: "file", required: true },
      { nome: "preco", label: "Preço", type: "number", required: true },
      { nome: "categoriaId", label: "Categoria", type: "select", required: true },
      { nome: "unidadeMedidaId", label: "Unidade de medida", type: "select", required: true },
      { nome: "pesoEmbalagem", label: "Peso da embalagem", type: "number", required: true },
      { nome: "dataValidade", label: "Data de validade", type: "text", required: true },
    ],
  };

  return <Index config={config} FormComponent={Produto} />;
}
