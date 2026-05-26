import styles from './TarjetaProducto.module.css';
function TarjetaProducto({ imagen, nombre, precio }) {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={imagen}  alt={nombre}/>
            <h3 className={styles.name}>{nombre}</h3>
            <p className={styles.price}>${precio}</p>
        </div>
    );
}
export default TarjetaProducto;