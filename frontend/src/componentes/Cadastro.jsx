import React from "react";
import { CompForm } from "./CompForm";

export function Cadastro() {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        setConfig({        
            rotaModulo: 'http://localhost:3000/api/usuario',
            nomeModulo: 'Cadastro',
            campos: [
                { "nome": "nome", "label": "Nome", "type": "text", "required": true },
                { "nome": "senha", "label": "Código", "type": "number", "required": true },
            ]
        })
    }, []);
  return (
    <CompForm config={config}/>
  );
}
