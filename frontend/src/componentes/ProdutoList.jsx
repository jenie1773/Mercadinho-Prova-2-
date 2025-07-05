import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProdutoCard";
import axios from "axios"; // certifique-se de importar o axios

export default function ProductList() {
  const [data, setData] = useState([]);

  async function buscaProdutos() {
    try {
      const response = await axios.get("http://localhost:3000/api/produtos");
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    buscaProdutos();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Produtos</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {data.map((produto) => (
          <ProductCard key={produto.id} product={produto} />
        ))}
      </div>
    </div>
  );
}
