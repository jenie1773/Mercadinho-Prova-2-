import React from "react";

export function CompInput({ type="text", nome, required=false, options=[], register }) {
    const { register } = useForm();

    if (type == "text" || type == "number") {
        return (
            <input 
                {...register(nome, { required: required })}
                type={type} 
                id={nome}
                name={nome}
                className="bg-gray-100 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
            ></input>
        )
    }

    if (type == 'select') {
        return (
            <select 
                {...register(nome, { required: required })}
                id={nome } 
                name={ nome } 
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
                <option value="">Selecione...</option>
                {options.map((option, index) => (
                     <option key={index} value={option.value}> 
                        { option.name }
                    </option>
                ))}
            </select>
        )
    }
}