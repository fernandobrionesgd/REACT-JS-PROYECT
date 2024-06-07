import ItemCount from "./../ItemCount/ItemCount";
import './ItemDetail.css';  // Importar el archivo CSS para los estilos

import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {

    const [ocultarCount, setOcultarCount] = useState(false);
    const { agregarProducto } = useContext(CartContext);

    const addProduct = (count) => {
      
        const productCart = { ...product, quantity: count };
        agregarProducto(productCart);
        setOcultarCount(true);
      };

    return (
        <div className="container">
            <div className="product-block">
                <img className="product-image" src={product.image} alt={product.name} />
                <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">Precio: {product.price}</p>
                    <ItemCount stock={product.stock} addProduct={addProduct}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;