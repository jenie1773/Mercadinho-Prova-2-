import React from "react";

export function CompButton({ type, closeModal, color, texto, addClass="" }) {
    if (!color) {
        switch(toLowerCase(texto)) {
            case 'cancelar':
                color = 'red'
                break;
            case 'salvar':
                color = 'green'
                break;
            default :
                color = 'blue'
            break;
        }
    }

    return (
        <button
            type={type}
            onClick={closeModal}
            className={`absolute top-2 right-2 text-${color}-500 hover:text-${color}-700 ${addClass}`}
        >{ texto }</button>
    )
}