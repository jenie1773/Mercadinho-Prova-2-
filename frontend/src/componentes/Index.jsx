import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Form } from "./Form";

export function Index({ json }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [QtdItensPagina] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dadosItem, setdadosItem] = useState(false);
  const ultimoItem = currentPage * QtdItensPagina;
  const primeiroItem = ultimoItem - QtdItensPagina;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const closeModal = () => setIsModalOpen(false);

  const openModal = () => {
    setdadosItem(false);
    setIsModalOpen(true);
  };

  async function handleList() {
    try {
      const result = await axios.get(json.rotaModulo);
      setData(result.data);
    } catch (err) {
      console.log("Erro ao buscar os dados da API: ", err);
    }
  }

  useEffect(() => {
    handleList();
  }, []);


  const deletaItem = async (id, nome) => {
    try {
      await axios.delete(`${json.rotaModulo}/${id}`);
      alert(nome + " deletado com sucesso!");
      handleList();
    } catch (error) {
      console.error("Erro ao deletar o item:", error);
      alert("Erro ao deletar!");
    }
  };

  const editForm = (data) => {
    setdadosItem(data);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="container">
        <div className="px-4 py-4">
          <div className="flex justify-end">
            <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded">
              Adicionar
            </button>
          </div>
          <h1>{json.nomeModulo}</h1>
          <p>Aqui estão todos os {json.nomeModulo}s disponíveis</p>
        </div>

        {isModalOpen && (
          <Form dadosLista={dadosItem} closeModal={closeModal} json={json} atualizarLista={handleList}/>
        )}

        <div className="overflow-x-auto px-4 py-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                {json.campos.map((campo, index) => (
                  <th key={index} className="py-2 px-4 border-b">
                    {campo.label}
                  </th>
                ))}
                <th className="py-2 px-4 border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data
                .slice(primeiroItem, ultimoItem)
                .map((item, index) => (
                  <tr key={index}>
                    {json.campos.map((campo, i) => (
                      <td key={i} className="py-2 px-4 border-b">
                        {item[campo.nome]}
                      </td>
                    ))}
                    <td className="flex justify-center border-b py-2">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => editForm(item)}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deletaItem(item._id, item.nome)}
                        className="text-red-500 hover:text-red-700 ml-4"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Anterior
            </button>
            <button>{currentPage}</button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(data.length / QtdItensPagina)}
              className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
