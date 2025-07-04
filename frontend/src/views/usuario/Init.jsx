import React from "react";
import { Index } from './../../componentes/Index';
import { Usuario } from './Form';

export default function UsuarioInit() {
  const config = {
    rotaModulo: "http://localhost:3000/api/usuario",
    nomeModulo: "Usuário",
    campos: [
      { nome: "codigo", label: "Código", type: "number", required: true },
      { nome: "nome", label: "Nome", type: "text", required: true },
      { nome: "email", label: "Email", type: "text", required: true }
    ],
  };

  return <Index config={config}  FormComponent={Usuario}/>;
}
