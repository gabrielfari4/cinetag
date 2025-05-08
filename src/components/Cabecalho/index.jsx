import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './logo.png';

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
        </header>
    )
}

export default Cabecalho;