import React from "react";
import { CompForm } from "../../componentes/CompForm";

export function Categoria() {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        setConfig = {        
            rotaModulo: 'http://localhost:3000/api/categoria',
            nomeModulo: 'Categoria',
            campos: [
                { "nome": "id", "label": "Id", "type": "number", "required": false },
                { "nome": "codigo", "label": "Código", "type": "number", "required": true },
                { "nome": "nome", "label": "Nome", "type": "text", "required": true },
            ]
        }
    }, []);

    if (!config) {
        return <p>Carregando...</p>; 
    }

    return (
        <CompForm config={config}/>
    )
}