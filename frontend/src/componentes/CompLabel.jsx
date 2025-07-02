import React from "react";

export function CompLabel({ nome, label }) {
    return (
        <label
            htmlFor={nome}
            className="block text-sm font-medium text-gray-700"
        >{label}</label>
    )
}