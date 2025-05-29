import React from "react";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <img
        src="https://i0.wp.com/market4u.com.br/wp-content/uploads/2022/09/o-que-e-preciso-para-abrir-um-mercado.png?w=800&ssl=1"
        alt="Banner de Produtos"
        className="w-full max-w-4xl h-64 object-cover rounded-lg shadow-md"
      />
      <h1 className="mt-8 text-3xl font-bold text-gray-800">Bem-vindo ao Sistema de Produtos</h1>
      <p className="mt-2 text-gray-600 text-lg">Gerencie seus produtos com facilidade e praticidade.</p>
    </div>
  );
}
