import Cabecalho from '@/components/Cabecalho';
import styles from './Inicio.module.css';
import Rodape from '../../components/Rodape';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';

const Inicio = () => {
    return (
        <>
        <Cabecalho />
        <Banner imagem='home' />
        <Titulo><h1>Um lugar para guardar seus vídeos e filmes</h1></Titulo>
        <h1>Nova página</h1>
        <Rodape />
        </>
    )
}

export default Inicio;