import axios from "axios";
import React, { useState, useEffect } from "react";
import { CompButton } from "./CompButton";
import { CompInput } from "./CompInput";
import { useForm } from 'react-hook-form';
import { CompLabel } from './CompLabel';

export function CompForm({ config, dadosLista, atualizarLista, closeModal }) {
  const { register, handleSubmit, setValue } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [id, setId] = useState(null);
  const isEdit = Boolean(id);

  
  useEffect(() => {
    if (dadosLista) {
      setId(dadosLista.id);
      config.campos.forEach(campo => {
        setValue(campo.nome, dadosLista[campo.nome]);
      });
    }
  }, [dadosLista, setValue, config.campos]);

  const onSubmit = async (data) => {
    try {
      const metodo = isEdit ? axios.put : axios.post;
      const url = isEdit ? `${config.rotaModulo}/${id}` : config.rotaModulo;
      const mensagem = isEdit ? "alterado" : "salvo";
  
      await metodo(url, data);
      setSuccessMessage(`${config.nomeModulo} ${mensagem} com sucesso!`);

      atualizarLista();
      closeModal();
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      setSuccessMessage("Erro ao salvar ou alterar os dados.");
    }
  };

  return (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-full overflow-y-auto relative p-6">
        <button 
           onClick={() => {
            if (typeof closeModal === 'function') {
              closeModal();
            } else {
              console.warn("closeModal não é uma função!", closeModal);
            }
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >x</button>
        <h2 className="text-xl font-semibold mb-4"> {id ? "Editar" : "Adicionar"} {config.nomeModulo} </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          
          {config.campos.map((campo, index) => (
            <div className="mb-4" key={index}>
              <CompLabel nome={campo.nome} label={campo.label} />
              <CompInput nome={campo.nome} type={campo.type} required={campo.required} register={register} options={campo?.options}/>
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
