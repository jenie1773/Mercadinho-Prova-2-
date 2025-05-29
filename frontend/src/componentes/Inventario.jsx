import React, { useEffect, useState } from "react";
import "../App.css";
import { Index } from "./Index";

export function Inventario() {
  const [json, setJson] = useState(null);

  useEffect(() => {
    setJson({
      rotaModulo: 'http://localhost:3000/api/inventario',
      nomeModulo: 'Inventario',
      campos: ['id', 'nome', 'descricao', 'valor'],
    });
  }, []);

  if (!json) {
    return <p>Carregando...</p>; 
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
    <img
      src="https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?t=st=1746403487~exp=1746407087~hmac=490646f7e4afe555ec7be5d0004d6b6aeb82b7bdeccc8858236b43a001dbc1f1&w=996"
      alt="Banner de Produtos"
      className="w-full max-w-4xl h-64 object-cover rounded-lg shadow-md"
    />
    <h1 className="mt-8 text-3xl font-bold text-gray-800">Disponível na próxima versão</h1>
    <p className="mt-2 text-gray-600 text-lg">Aguarde pelo serviço de administração de inventário</p>
  </div>
  );
}
