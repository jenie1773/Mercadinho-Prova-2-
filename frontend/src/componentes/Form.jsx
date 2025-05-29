import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';

export function Form({ json, dadosLista, atualizarLista, closeModal }) {
  const { register, handleSubmit, setValue } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    if (dadosLista) {
      setId(dadosLista._id);
      json.campos.forEach(campo => {
        setValue(campo.nome, dadosLista[campo.nome]);
      });
    }
  }, [dadosLista, setValue, json.campos]);

  const onSubmit = async (data) => {
    try {
      if (!id) {
        await axios.post(json.rotaModulo, data);
        setSuccessMessage(`${json.nomeModulo} salvo com sucesso!`);
        atualizarLista()
        closeModal()
      } else {
        await axios.put(`${json.rotaModulo}/${id}`, data);
        setSuccessMessage(`${json.nomeModulo} alterado com sucesso!`);
        atualizarLista()
        closeModal()
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      setSuccessMessage("Erro ao salvar os dados.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >x</button>

        <h2 className="text-xl font-semibold mb-4">
          {id ? "Editar" : "Adicionar"} {json.nomeModulo}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {successMessage && <p className="text-green-600">{successMessage}</p>}

          {json.campos.map((campo, index) => (
            <div className="mb-4" key={index}>
              <label
                htmlFor={campo.nome}
                className="block text-sm font-medium text-gray-700"
              >
                {campo.label}
              </label>
              <input
                {...register(campo.nome, { required: campo.required })}
                type={campo.type || "text"}
                id={campo.nome}
                name={campo.nome}
                className="bg-gray-100 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
              />
            </div>
          ))}

          <div className="flex justify-center p-4">
            <button type="submit" className="px-4 py-2 mx-1 bg-green-200 rounded hover:bg-green-300">Salvar</button>
            <button type="button" onClick={closeModal} className="px-4 py-2 mx-1 bg-red-200 rounded hover:bg-red-300">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
