import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearchBar } from "./shared/components/CustomSearchBar"
import { GifList } from "./gifs/components/GifList"
import { useState } from "react"


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

  return (
    <>
    { /* Componente Header - Solo recibe props del padre (flujo padre → hijo) */}
    <CustomHeader title="Buscador Gifs" description="Descubre y comparte Gifs" />

    { /* Componente SearchBar - También comunicación padre → hijo */}
    <CustomSearchBar placeholder="Buscar Gifs"/>

    { /* PreviousSearches - Comunicación bidireccional
         Padre → Hijo: enviamos la lista de términos (searches)
         Hijo → Padre: el hijo usa la función onLabelClicked para avisar al padre */}
    <PreviousSearches searches={ previousTerms } onLabelClicked={handleTermClicked}/>

    { /* GifList - comunicación padre → hijo: le enviamos los gifs como prop */}
    <GifList gifs={mockGifs}/>

    </>
  )
}
