import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className="cart-widget-full">
         <IoCartOutline color="white" size={30}/>
         <span className="number-add">3</span>
        </div>
    )
}

export default CartWidget