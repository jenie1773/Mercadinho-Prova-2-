import React, { useEffect, useState } from "react";
import "../App.css";
import { Index } from "./Index";

export function Estoque() {
  const [json, setJson] = useState(null);

  useEffect(() => {
    setJson({
      rotaModulo: 'http://localhost:3000/api/estoque',
      nomeModulo: 'Estoque',
      campos: [
        { "nome": "id", "label": "Código", "type": "text", "required": true },
        { "nome": "nome", "label": "Nome", "type": "text", "required": true },
        { "nome": "descricao", "label": "Descrição", "type": "text", "required": true }
      ]
    });
  }, []);

  if (!json) {
    return <p>Carregando...</p>; 
  }

  return (
    <Index json={json}></Index>
  );
}
