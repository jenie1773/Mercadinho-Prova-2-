import React, { useState, useEffect } from "react";
import { CompForm } from "../../componentes/CompForm";

export function UnidadeMedida({ config, dadosLista, atualizarLista, closeModal }) {

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