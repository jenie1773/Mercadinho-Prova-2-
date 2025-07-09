import React from "react";

export function CompInput({ type="text", nome, register,  required = false, options=[] }) {
    console.log('compInput', options)
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

    if (type == 'file') {
        return (
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                <svg className="mx-auto size-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                </svg>
                <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                    <input 
                        id={nome}
                        name={nome} 
                        type='file'
                        
                        {...register(nome, { required: required })}
                    />
                    </label>
                </div>
                <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
        )
    }

    if (type == 'date') {
        return (
        <div className="flex flex-col">
            <input
              type="date"
              id={nome}
              {...register(nome, { required })}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        )
    }
}