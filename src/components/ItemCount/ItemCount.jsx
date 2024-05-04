import './ItemCount.css'
import { useState } from "react"

          // la variable input que recibe de cada SKU para operar, es el stock
const ItemCount = ({ stock, name }) => {
  const [ count, setCount ] = useState(1)
  const productname = name
  
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
    console.log(count)
    console.log(productname)

  }

  return (
    <div className="agregar-productos">
      <button onClick={restar} >-</button>
      <p>{count}</p>
      <button onClick={sumar}>+</button>
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}
export default ItemCount