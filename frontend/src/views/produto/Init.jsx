import React, { useEffect, useState } from "react";
import { Index } from './../../componentes/Index';
import axios from "axios";
import { Produto } from "./form";

export default function ProdutoInit() {
  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    async function fetchOptions() {
      try {
        const [resMarcas, resCategorias, resUnidades] = await Promise.all([
          axios.get('http://localhost:3000/api/marca'),
          axios.get('http://localhost:3000/api/categoria'),
          axios.get('http://localhost:3000/api/unidademedida'),
        ]);

        setMarcas(resMarcas.data.map(item => ({ value: item.id, name: item.nome })));
        setCategorias(resCategorias.data.map(item => ({ value: item.id, name: item.nome })));
        setUnidades(resUnidades.data.map(item => ({ value: item.id, name: item.nome })));

      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    }

    fetchOptions();
  }, []);

  const config = {
    rotaModulo: "http://localhost:3000/api/produtos",
    nomeModulo: "Produto",
    campos: [
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
      { nome: "marcaId", label: "Marca", type: "select", options: marcas, required: false },
      { nome: "imagem", label: "Imagem", type: "file", required: true },
      { nome: "preco", label: "Preço", type: "number", required: true },
      { nome: "categoriaId", label: "Categoria", type: "select", options: categorias, required: false },
      { nome: "unidadeMedidaId", label: "Unidade de medida", type: "select", options: unidades, required: false },
      { nome: "pesoEmbalagem", label: "Peso da embalagem", type: "number", required: true },
      { nome: "dataValidade", label: "Data de validade", type: "date", required: true },
    ],
  };

  return <Index config={config} FormComponent={Produto} />;
}
