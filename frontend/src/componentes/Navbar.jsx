import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const [logado, setLogado] = useState(false);

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogado(!!token); // true se existir token
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogado(false);
    navigate("/login");
  };

  return (
    <header>
      <nav className="bg-gray-800 w-full">
        <div className="w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              {logado && (
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {rotas.map((rota, index) => (
                      <a
                        href={`/${rota.path}`}
                        key={index}
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {rota.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden sm:block">
              {!logado ? (
                <button
                  onClick={() => navigate("/login")}
                  className="text-white px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="text-white px-4 py-2 bg-red-600 rounded hover:bg-red-500"
                >
                  Sair
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="sm:hidden px-4 py-2">
          {!logado ? (
            <button
              onClick={() => navigate("/login")}
              className="text-white px-4 py-2 bg-indigo-600 rounded w-full"
            >
              Login
            </button>
          ) : (
            <>
              <div className="space-y-1 pb-3 pt-2">
                {rotas.map((rota, index) => (
                  <a
                    href={`/${rota.path}`}
                    key={index}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {rota.label}
                  </a>
                ))}
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-white px-4 py-2 bg-red-600 rounded hover:bg-red-500"
              >
                Sair
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
