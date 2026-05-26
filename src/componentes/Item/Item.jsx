// Recibe las props usando destructuring
import styles from './Item.module.css';
import { useState } from 'react';
export function Item({ imagen, nombre, precio, stock }) {
      const [cantidad, setCantidad] = useState(0);

      const incrementar = () => {
      if (cantidad < stock) {
            setCantidad(cantidad + 1);
            } 
      else {
            alert(`En este momento no disponemos de ${cantidad + 1} unidades de ${nombre}.`);
            }
      };

      const decrementar = () => {
      if (cantidad > 0) {
            setCantidad(cantidad - 1);
      }
      };
      const agregarAlCarrito = () => {
      alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
      };
return (
      <div className={styles.card}>
            <img className={styles.image} src={imagen}  alt={nombre}/>
            <h3 className={styles.name}>{nombre}</h3>
            <p className={styles.price}>${precio}</p>
            <p className={styles.stock}>Stock disponible: {stock - cantidad}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:
                        'center', margin: '0px 0' }}>
                  <button className={styles.button} onClick={decrementar}>-</button>
                  <p className={styles.cantidad}>{cantidad}</p>
                  <button className={styles.button} onClick={incrementar}>+</button>
            </div>
            <button className={styles.button} onClick={agregarAlCarrito}>Agregar</button>
</div>
);
// Faltaría ver cómo ocultar el botón de agregar y mostrar uno de eliminar
}