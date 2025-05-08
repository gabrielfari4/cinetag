import Cabecalho from '@/components/Cabecalho';
import styles from './Inicio.module.css';
import Rodape from '../../components/Rodape';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import Card from '../../components/Card';

const Inicio = () => {
    return (
        <>
        <Cabecalho />
        <Banner imagem='home' />
        <Titulo><h1>Um lugar para guardar seus vídeos e filmes</h1></Titulo>
        <Card
            id='1'
            titulo='Qualquer'
            capa='https://www.natureswaybirds.com/cdn/shop/articles/eastern_bluebird.png?v=1713204293'
        />
        <Rodape />
        </>
    )
}

export default Inicio;