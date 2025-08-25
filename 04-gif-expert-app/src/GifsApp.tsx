import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearchBar } from "./shared/components/CustomSearchBar"
import { GifList } from "./gifs/components/GifList"
import { useState } from "react"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"


export const GifsApp = () => {

    // Estado local en el componente padre
    // Aquí guardamos los términos de búsqueda previos
    const [previousTerms, setPreviousTerms] = useState(['dragon'])

    // Esta función se la pasamos al hijo (PreviousSearches)
    // para que el hijo pueda notificar al padre cuando se hace click en un término
    const handleTermClicked = (term:string) => {
        console.log(`Term clicked: ${term}`);
        // Aquí podríamos actualizar el estado, lanzar una nueva búsqueda, etc.
    }

// const handleSearch = (query: string) =>{
//   let minisculas = query.toLocaleLowerCase().trim(); //minusculas y espacios
//   if(minisculas === "") return; // Evitamos búsquedas vacías
//   // Aquí podríamos hacer una búsqueda real, por ejemplo, llamando a una API
//   setPreviousTerms(prev => {
//     if(prev.includes(minisculas)) {
//       // Si ya existe, lo movemos al inicio de la lista
//       //----------------------------------------------------
//       // Creamos un nuevo arreglo poniendo primero el término actual (`minisculas`),
//       // y luego todos los elementos anteriores excepto ese mismo término (para evitar duplicados)
//       const nuevo = [minisculas, ...prev.filter(t => t !== minisculas)];
//       console.log("Se ingresó:", minisculas, "| Array actualizado:", nuevo);
//       return nuevo.slice(0,7); // Limitamos a 8 términos previos
//     }
//     // Si no existe, lo agregamos al inicio
//     const nuevo = [minisculas, ...prev];
//     console.log("Se ingresó:", minisculas, "| Array actualizado:", nuevo);
//     return nuevo.slice(0,7); // Limitamos a 8 términos previos
//   });
// }

const handleSearch = async (query: string = '') =>{
  query= query.trim().toLowerCase(); //minusculas y espacios

  if(query.length === 0) return; // Evitamos búsquedas vacías

  if(previousTerms.includes(query)) return; // Evitamos duplicados

  setPreviousTerms([query, ...previousTerms].splice(0,8)); // Limitamos a 8 términos previos

  const gifs = await getGifsByQuery(query);

  console.log(gifs);
}  
  return (
    <>
    { /* Componente Header - Solo recibe props del padre (flujo padre → hijo) */}
    <CustomHeader 
    title="Buscador Gifs" 
    description="Descubre y comparte Gifs" />

    { /* Componente SearchBar - También comunicación padre → hijo */}
    <CustomSearchBar 
    onQuery={ handleSearch } 
    placeholder="Buscar Gifs"/>

    { /* PreviousSearches - Comunicación bidireccional
         Padre → Hijo: enviamos la lista de términos (searches)
         Hijo → Padre: el hijo usa la función onLabelClicked para avisar al padre */}
    <PreviousSearches searches={ previousTerms } onLabelClicked={handleTermClicked}/>

    { /* GifList - comunicación padre → hijo: le enviamos los gifs como prop */}
    <GifList gifs={mockGifs}/>

    </>
  )
}
