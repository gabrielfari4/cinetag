import Cabecalho from '@/components/Cabecalho';
import styles from './Inicio.module.css';
import Rodape from '../../components/Rodape';
import Banner from '../../components/Banner';

const Inicio = () => {
    return (
        <>
        <Cabecalho />
        <Banner imagem='home' />
        <h1>Nova página</h1>
        <Rodape />
        </>
    )
}

export default Inicio;