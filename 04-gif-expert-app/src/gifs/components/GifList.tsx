import { FC } from "react";
import type { Gif } from "../../mock-data/gifs.mock";
interface Props {
    gifs: Gif[];
}

export const GifList: FC<Props> = ({gifs} : Props) => {
  return (
    <div className="gifs-container">
        {
            gifs.map((gif) => (
            <div key={gif.id} className="gif-card">
                <img src={gif.url} alt={gif.title} />
                <h3>{gif.title}</h3>
                <p>
                    Dimensiones: {gif.width} x {gif.height}px (1.5MB)
                </p>
            </div>
            ))
        }
    </div>
  )
}
