import "./ItemList.css"
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
      <div className="item">
           <img src={product.image} style={{ width: "400px" }}/>
           <p>{product.name}</p>
           <p>Precio: {product.price}</p>
           <Link to={`/detail/${product.id}`} > Ver más aquí </Link>
      </div>
    );
  };
  
  export default Item;

