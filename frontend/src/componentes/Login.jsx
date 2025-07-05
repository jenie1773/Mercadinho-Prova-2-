import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CompLabel } from "./CompLabel";
import { Usuario } from './../views/usuario/Form';
import { useAuth } from "../componentes/AuthContext"; // já tava certo
import { toast } from "react-toastify";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dadosItem, setdadosItem] = useState(false);
  const [data, setData] = useState([]);
  const { login } = useAuth(); // 👈 pega o login do contexto

  const closeModal = () => setIsModalOpen(false);

  async function handleList() {
    try {
      const result = await axios.get('http://localhost:3000/api/usuario');
      setData(result.data);
    } catch (err) {
      console.log("Erro ao buscar os dados da API: ", err);
    }
  }

  useEffect(() => {
    handleList();
  }, []);

  const openModal = () => {
    setdadosItem(false);
    setIsModalOpen(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", { email, senha });
      const { token } = response.data;

      login(token); // 👈 usa o contexto pra salvar token e atualizar estado global

      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao logar:", error);
      toast.error("Login inválido");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Entre com sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <CompLabel nome="email" label="Email" />
            <div className="mt-2">
              <input
                type="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <CompLabel nome="senha" label="Senha" />
            <div className="mt-2">
              <input
                type="password"
                id="senha"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500"
            >
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Não possui login?
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" onClick={openModal}>
            {" "}Cadastrar
          </a>
        </p>

        {isModalOpen && (
          <Usuario
            atualizarLista={handleList}
            dadosLista={dadosItem}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}
