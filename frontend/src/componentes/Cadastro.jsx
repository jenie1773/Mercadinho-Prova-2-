import React,{ useEffect, useState} from "react";
import { CompForm } from './CompForm';

export function Cadastro({ closeModal , atualizarLista, dadosLista }) {
  const [config, setConfig] = useState(null);

  useEffect(() => {
      setConfig({        
          rotaModulo: 'http://localhost:3000/api/usuario',
          nomeModulo: 'Cadastro',
          campos: [
              { "nome": "codigo", "label": "Código", "type": "text", "required": true },
              { "nome": "nome", "label": "Nome", "type": "text", "required": true },
              { "nome": "email", "label": "Email", "type": "text", "required": true },
              { "nome": "senha", "label": "Senha", "type": "number", "required": true },
          ]
      })
  }, []);
  
  if (!config) {
      return <p>Carregando...</p>; 
  }

  return (
      <CompForm 
          config={config} 
          dadosLista={dadosLista} 
          atualizarLista={atualizarLista} 
          closeModal={closeModal} 
      />
  )
}
