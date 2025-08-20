import { useEffect,useState } from "react";

interface Props{
    placeholder?: string;
    onQuery: (query:string) => void;
}

export const CustomSearchBar = ({placeholder = 'Buscar', onQuery} : Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId= setTimeout(() => {

      onQuery(query);
    },800);

    return () => {
      clearTimeout(timeoutId); // Limpiamos el timeout si el componente se desmonta o cambia el query 
      // Esto previene que se llame a onQuery con un valor antiguo si el usuario escribe rápidamente
      
    }
  },[query, onQuery]);

  const handleSearch = () =>{
    onQuery(query);
    setQuery(""); // Limpiamos el input después de buscar
  }
  
  const handeKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
  return (
    <div className="search-container">
        <input 
        type="text" 
        placeholder={placeholder} 
        value= {query}
        onChange = { (event) => setQuery(event.target.value)}
        onKeyDown={ handeKeyDown}
        />
        <button
        onClick={handleSearch}
        >
        Buscar
        </button>
    </div>
  )
}
