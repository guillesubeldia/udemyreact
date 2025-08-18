// Importamos el hook useState desde React.
// useState es una función especial que nos permite crear y manejar variables que "recuerdan su valor"
// incluso cuando el componente se vuelve a dibujar (renderizar).
import { useState } from 'react'

// Creamos un componente de React llamado "GiftExpertApp".
export const GiftExpertApp = () => {

  // Creamos un estado llamado "categories" y una función "setCategories" para actualizarlo.
  // useState recibe como valor inicial un arreglo con 3 cadenas de texto.
  // categories → guarda el valor actual del estado (las categorías).
  // setCategories → es la función que usamos cuando queremos cambiar el valor de categories.
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  // Creamos otro estado llamado "inputValue" y su función "setInputValue".
  // Este estado se encargará de guardar lo que el usuario escriba en el input de texto.
  const [inputValue, setInputValue] = useState('');

  // Definimos la función "addCategory".
  // Esta función se ejecuta cuando el usuario hace clic en el botón "Add Category".
  const addCategory = () => {
    // .push() agrega un nuevo elemento al final del arreglo "categories".
    // En este caso, agrega lo que el usuario escribió en el input (inputValue).
    categories.push(inputValue)   // ⚠️ Este enfoque modifica directamente el arreglo original (no es lo ideal en React).

    // Actualizamos el estado categories usando setCategories.
    // Como el arreglo ya fue modificado con .push(), volvemos a pasar ese mismo arreglo.
    setCategories(categories)     

    // Limpiamos el campo de texto después de agregar la categoría, dejando el input vacío.
    setInputValue('')              
  }

  // Todo lo que está dentro del "return" es lo que React dibuja en pantalla (el JSX).
  return (
    <>
      {/* Título principal de la aplicación */}
      <h1>GiftExpertApp</h1>

      {/* Input de texto donde el usuario puede escribir una nueva categoría */}
      <input
        type="text"                          
        value={inputValue}                   // el valor del input está conectado al estado "inputValue"
        onChange={(e) => setInputValue(e.target.value)} 
        // onChange se ejecuta cada vez que el usuario escribe algo.
        // e.target.value → es el texto que hay dentro del input.
        // setInputValue(e.target.value) → actualiza el estado con ese nuevo texto.
      />

      {/* Botón que, al hacer clic, ejecuta la función addCategory */}
      <button onClick={addCategory}>Add Category</button>

      {/* Lista ordenada (ol) donde mostramos las categorías */}
      <ol>
        {
          // categories.map() recorre cada elemento del arreglo "categories".
          // Por cada categoría encontrada, devuelve un <li> (elemento de lista).
          categories.map( category => { 
            return <li key={category}>{category}</li>
            // key={category} → la prop "key" es necesaria en React para identificar cada elemento único.
            // category → es el texto que se mostrará dentro del <li>.
          })
        }
      </ol>

      {/* Aquí podríamos mostrar los GIFs relacionados con cada categoría (futuro desarrollo). */}
    </>
  )
}
