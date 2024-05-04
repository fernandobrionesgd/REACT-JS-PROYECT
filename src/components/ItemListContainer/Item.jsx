import "./ItemList.css"

const Item = ({ product }) => {
    return (
      <div className="item">
           <img src={product.image} style={{ width: "400px" }}/>
           <p>{product.name}</p>
           <p>Precio: {product.price}</p>
      </div>
    );
  };
  export default Item;