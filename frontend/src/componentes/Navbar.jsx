import React from "react";
import "../App.css";

export function Navbar() {
    const rotas = [
        { path: "produto", label: "Produtos" },
        { path: "estoque", label: "Estoque" },
        { path: "marca", label: "Marca" },
        { path: "compra", label: "Compra" },
        { path: "categoria", label: "Categoria" },
        { path: "formapagamento", label: "Forma de Pagamento" },
        { path: "unidademedida", label: "Unidade de Medida" },
        { path: "usuario", label: "Usuário" },
      ];

  return (
    <header>
        <nav className="bg-gray-800 w-full">
            <div className="w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        {rotas.map((rota) => (
                            <a href={`/${rota.path}`} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">{ rota.label }</a>
                        ))}
                    </div>
                </div>
                </div>

            </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                {rotas.map((rota) => (
                    <a href={`/${rota.path}`} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">{ rota.label }</a>
                ))}
            </div>
            </div>
        </nav>
      </header>
  );
}
