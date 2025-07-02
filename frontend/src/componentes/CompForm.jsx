import axios from "axios";
import React, { useState, useEffect } from "react";
import { CompButton } from "./CompButton";
import { CompInput } from "./CompInput";
import { useForm } from 'react-hook-form';

export function CompForm({ config, closeModal }) {
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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">x</button>
        <h2 className="text-xl font-semibold mb-4"> {id ? "Editar" : "Adicionar"} {config.nomeModulo} </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          
          {config.campos.map((campo, index) => (
            <div className="mb-4" key={index}>
              <CompLabel nome={campo.nome} label={campo.label} />
              <CompInput nome={campo.nome} type={campo.type} required={campo.required} register={register} />
            </div>
          ))}

          <div className="flex justify-center p-4">
            <CompButton type='submit' texto='Salvar'/>
            <CompButton type='button'  onClick={closeModal} texto='Cancelar'/>
          </div>
        </form>
      </div>
    </div>
  );
}
