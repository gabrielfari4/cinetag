import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './logo.png';
import CabecalhoLink from '../CabecalhoLink';

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <Link to="/">
                <img src={logo} alt='logo do Cine Tag' />
            </Link>
            <nav>
                <CabecalhoLink url='/'>Home</CabecalhoLink>
                <CabecalhoLink url='/favoritos'>Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;