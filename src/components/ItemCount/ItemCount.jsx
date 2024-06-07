import './ItemCount.css'
import { useState } from "react"

          // la variable input que recibe de cada SKU para operar, es el stock
const ItemCount = ({ stock, addProduct }) => {
  

  const [ count, setCount ] = useState(1)

  
  const restar = () => {
    // tiene que haber al menos 1 producto agregado al carrito para restar
    if(count > 1){
      setCount( count - 1 )
    }
  }

  const sumar = () => {
    // la cantidad agregada al carrito, no debe ser mayor al stock. 
    if( count < stock ){
      setCount( count + 1)
    }
  }

  const agregarAlCarrito = () => {
    addProduct(count)
    console.log(count)
  }

  return (
    <div className="agregar-productos">
      <button className="btn-control" onClick={restar} >-</button>
      <p className="contador">{count}</p>
      <button className="btn-control" onClick={sumar}>+</button>
      <button className="btn-agregar" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}
export default ItemCount