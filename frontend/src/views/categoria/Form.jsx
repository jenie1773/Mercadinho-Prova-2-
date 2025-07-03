import React, { useState, useEffect } from "react";
import { CompForm } from "../../componentes/CompForm";

export function Categoria({ props }) {

    if (!props) {
        return <p>Carregando...</p>; 
    }

    return (
        <CompForm config={props}/>
    )
}