
export const getImagen = async() => {

    try {

        const apiKey = 'gXXkpLsU3wZhBpEUZx6Uth5p2dRU43l5';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        //console.error(error);
        // retornar un mensaje de error o un valor por defecto
        return "no se encontro la imagen";
    }
    
    
    
}

 getImagen();



