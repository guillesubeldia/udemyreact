import type { FC } from 'react';

// Definimos las props que recibirá el hijo
// - searches: lista de términos previos (padre → hijo)
// - onLabelClicked: función que el hijo invocará cuando se haga click (hijo → padre)
interface Props{
   searches: string[]; 
   onLabelClicked: ( term:string ) => void;
}

export const PreviousSearches: FC<Props> = ({searches , onLabelClicked}) => {
  return (
    <div className="previous-searches">
        <h2>Busquedas Previas</h2>
        <ul className="previous-searches-list">

        { /* Recorremos cada término que viene del padre */}
        {searches.map(term => (
            <li key={term}
            // Aquí ocurre la comunicación hijo → padre:
            // cuando el usuario hace click en un término,
            // el hijo ejecuta la función recibida del padre y le pasa el "term".
            onClick={ () => onLabelClicked(term)}
            className="previous-search-item">{term}</li>
        ))}

        </ul>
    </div>
  )
}
