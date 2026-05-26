import { ItemList } from "../ItemList/ItemList";

export function ItemListContainer({ Mensaje }) {
	const productos = [
		{ id: '1234', nombre: 'Sánguche de Milanesa', imagen: '../src/assets/sanguche.jpg', precio: 4999.99, stock: 50 },
		{ id: '2344', nombre: 'Hamburguesa Completa', imagen: '../src/assets/hamburguesa.jpg', precio: 3999.99, stock: 25 },
		{ id: '2545', nombre: 'Superpancho Doble', imagen: '../src/assets/superpancho.jpg', precio: 2499.99, stock: 60 },
	];

	return (
		<div>
			<h2>{Mensaje}</h2>
			<div>
				<ItemList productos={productos}/>
			</div>
		</div>
	);
}