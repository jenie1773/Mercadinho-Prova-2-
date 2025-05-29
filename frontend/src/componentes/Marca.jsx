import React, { useEffect, useState } from "react";
import "../App.css";
import { Index } from "./Index";

export function Marca() {
  const [json, setJson] = useState(null);

  useEffect(() => {
    setJson({
      rotaModulo: 'http://localhost:3000/api/marca',
      nomeModulo: 'Marca',
      campos: [
        { "nome": "id", "label": "Código", "type": "text", "required": true },
        { "nome": "nome", "label": "Nome", "type": "text", "required": true },
        { "nome": "descricao", "label": "Descrição", "type": "text", "required": true }
      ],
    });
  }, []);

  if (!json) {
    return <p>Carregando...</p>; 
  }

  return (
    <Index json={json}></Index>
  );
}
