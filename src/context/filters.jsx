import { createContext, useState } from "react";

// Se crea el contexto primero y es el que se consume
export const FiltersContext = createContext();


// Este nos provee acceso al contexto   

// eslint-disable-next-line react/prop-types
export function FilterProvider ({ children }) {

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters        
        }}>
            {children}
        </FiltersContext.Provider>

    )
}