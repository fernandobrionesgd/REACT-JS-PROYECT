import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext)

    if (typeof cantidadTotal !== 'function') {
        console.error('CartContext no está proporcionando correctamente la función cantidadTotal');
        return null;
      }

    let cantidad = cantidadTotal()
    console.log(cantidad)

    return (
        <Link to="/cart" className="cart-widget-full">
            <IoCartOutline color="white" size={30}/>
            <span className="number-add">{ cantidad >=1 && cantidad }</span>
         </Link>

    )
}

export default CartWidget