import axios from 'axios';
import type { GiphyResponse } from '../Interfaces/giphy.response';
import { Gif } from '../interfaces/gif.interface';
import { giphyApi } from '../api/giphy.api';

export const getGifsByQuery = async (query : string): Promise<Gif[]> => {

    const response = await giphyApi<GiphyResponse>('/search', {
        params:{
            q: query,
            limit: 10,
            //esto lo pasamos a gifs/api/giphy.api.ts
            // lang: 'es',
            // api_key: import.meta.env.VITE_GIPHY_API_KEY, 
        }
    });

    //esto se conoce como mapeo de datos

    return response.data.data.map( (gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)

    }));
}