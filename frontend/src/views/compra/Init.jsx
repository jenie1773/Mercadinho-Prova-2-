import React, { useEffect, useState } from "react";
import { Index } from './../../componentes/Index';
import { Compra } from './Form';
import axios from "axios";

export default function CompraInit() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);

  async function handleList() {
    try {
      const result = await axios.get('http://localhost:3000/api/formapagamento');
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
    rotaModulo: "http://localhost:3000/api/compras",
    nomeModulo: "Compra",
    campos: [
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
      { nome: "cpfComprador", label: "Cpf do Comprador", type: "text", required: true },
      { nome: "valorTotal", label: "Valor Total", type: "number", required: true },
      { nome: "formaPagamentoId", label: "Forma de Pagamento", type: "select", options:options, required: false },
    ],
  };

  return <Index config={config} FormComponent={Compra} />;
}
