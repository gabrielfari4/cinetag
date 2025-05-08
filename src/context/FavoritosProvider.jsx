import { useState } from "react"
import { FavoritosContext } from "./FavoritosContext"

export const FavoritosProvider = ({children}) => {
    const [favorito, setFavorito] = useState([])
    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}