import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritosContext } from '../../hooks/useFavoritosContext';
import { Link } from 'react-router-dom';

const Card = ({ id, titulo, capa }) => {
    const {favorito, adicionarFavorito} = useFavoritosContext();
    const isFavorite = favorito.some((fav) => fav.id === id)
    const icone = isFavorite ? iconeDesfavoritar : iconeFavoritar
    return (
        <div className={styles.container}>
            <Link to={`${id}`} className={styles.link}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            </Link>
            <img 
                src={icone} 
                alt="Favoritar" 
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({id, titulo, capa})
                }}
            />
        </div>
    )
}

export default Card;