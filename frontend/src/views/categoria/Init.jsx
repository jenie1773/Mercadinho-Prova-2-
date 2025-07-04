import React, { useEffect, useState } from "react";
import { Index } from './../../componentes/Index';
import { Categoria } from './Form';
import axios from "axios";

export default function CategoriaInit() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  
  async function handleList() {
    try {
      const result = await axios.get('http://localhost:3000/api/categoria');
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
    rotaModulo: "http://localhost:3000/api/categoria",
    nomeModulo: "Categoria",
    campos: [
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
      { nome: "categoriaId", label: "Categoria Pai", type: "select", options:options, required: false },
    ],
  };

  return <Index config={config} FormComponent={Categoria} />;
}
