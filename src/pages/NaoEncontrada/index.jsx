import styles from './NaoEncontrada.module.css';

const NaoEncontrada = () => {
    return (
        <section className={styles.container}>
            <h2>Ops...</h2>
            <p>A página não foi encontrada.</p>
        </section>
    )
}

export default NaoEncontrada;