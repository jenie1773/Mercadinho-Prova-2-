import React, { useEffect, useState } from "react";
import "../App.css";
import { Index } from "./Index";

export function Products() {
  const [json, setJson] = useState(null);

  useEffect(() => {
    setJson({
      rotaModulo: 'http://localhost:3000/api/produtos',
      nomeModulo: 'Produto',
      campos: [
        { "nome": "id", "label": "Código", "type": "text", "required": true },
        { "nome": "nome", "label": "Nome", "type": "text", "required": true },
        { "nome": "descricao", "label": "Descrição", "type": "text", "required": true },
        { "nome": "valor", "label": "Valor", "type": "number", "required": true }
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
