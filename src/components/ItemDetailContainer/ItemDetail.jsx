import ItemCount from "./../ItemCount/ItemCount";
import './ItemDetail.css';  // Importar el archivo CSS para los estilos

const ItemDetail = ({ product }) => {
    return (
        <div className="container">
            <div className="product-block">
                <img className="product-image" src={product.image} alt={product.name} />
                <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">Precio: {product.price}</p>
                    <ItemCount stock={product.stock} name={product.name} price={product.price}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;