import { ItemListContainer } from '../../ItemListContainer/ItemListContainer';
import styles from './Main.module.css';
import { Contador } from '../../Contador/Contador';
 
function Main() {  
    return (  
        <div className={styles.mainstyle}>
            <main> 
                <ItemListContainer Mensaje="Nuestros Productos más Vendidos" />
            </main>
        </div> 
    );  
}  
export default Main;