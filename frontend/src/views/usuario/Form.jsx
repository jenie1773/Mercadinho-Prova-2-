import React, { useState, useEffect } from "react";
import { CompForm } from "../../componentes/CompForm";

export function Usuario() {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        setConfig({        
            rotaModulo: 'http://localhost:3000/api/usuario',
            nomeModulo: 'Usuario',
            campos: [
                { "nome": "id", "label": "Id", "type": "number", "required": false },
                { "nome": "nome", "label": "Nome", "type": "text", "required": true },
                { "nome": "senha", "label": "Senha", "type": "text", "required": true },
            ]
        })
    }, []);

    if (!config) {
        return <p>Carregando...</p>; 
    }

    return (
        <CompForm config={config}/>
    )
}