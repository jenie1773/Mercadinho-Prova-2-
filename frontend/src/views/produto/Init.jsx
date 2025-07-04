import React, { useEffect, useState } from "react";
import { Index } from './../../componentes/Index';
import axios from "axios";
import { Produto } from "./form";

export default function ProdutoInit() {

  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);

  async function handleList() {
    try {
      const result = await axios.get('http://localhost:3000/api/marca');
      setData(result.data);
    } catch (err) {
      console.log("Erro ao buscar os dados da API: ", err);
    }
  }

  useEffect(() => {
    handleList();
  }, []);

  useEffect(() => {
    if (data.length != 0) {
      const teste = data.map((item) => ({
        value: item.id,
        name: item.nome,
      }));
      setOptions(teste)
    }
  }, [data]);

  const config = {
    rotaModulo: "http://localhost:3000/api/produtos",
    nomeModulo: "Produto",
    campos: [
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
      { nome: "marcaId", label: "Marca", type: "select",options:options, required: false },
      { nome: "imagem", label: "Imagem", type: "file", required: true },
      { nome: "preco", label: "Preço", type: "number", required: true },
      { nome: "categoriaId", label: "Categoria", type: "select", required: false },
      { nome: "unidadeMedidaId", label: "Unidade de medida", type: "select", required: false },
      { nome: "pesoEmbalagem", label: "Peso da embalagem", type: "number", required: true },
      { nome: "dataValidade", label: "Data de validade", type: "text", required: true },
    ],
  };

  return <Index config={config} FormComponent={Produto} />;
}
