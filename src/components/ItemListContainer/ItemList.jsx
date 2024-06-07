import "./ItemList.css"
import Item from "./Item";

// colocamos aqui la prop pasada
const ItemList = ({products}) => {

return (
    <div className='item-list'> 
 
        { // products.map -> convertir el array a un objeto -> product (solo que ahora en un componente)
            products.map ( (product)=> (
                // debe ir un key obligatoriamente
                <div className='item-list2' key={product.id}> 
                 
                    <Item key={product.id} product={product} />
                    
                </div>
            ))
        }
    </div>
)
}

export default ItemList