import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
import styles from './Favoritos.module.css';

const Favoritos = () => {
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Qualquer' capa='' />
            </section>
        </>
    )
}

export default Favoritos;