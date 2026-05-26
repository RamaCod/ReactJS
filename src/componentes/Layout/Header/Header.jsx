import styles from './Header.module.css';
 
function Header() {  
    return (  
        <div className={styles.headerstyle}>
            <header> 
                <h1>Tienda React</h1>  

                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Carrito</a></li>
                    </ul>
                </nav>
            </header> 
        </div> 
    );  
}  
export default Header;