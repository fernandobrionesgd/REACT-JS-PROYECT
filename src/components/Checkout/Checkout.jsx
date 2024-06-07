import { useState } from "react";
import Formulario from "./Formulario";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";

import "./checkout.css"


const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async(event) => {
    event.preventDefault();
    //formato a los datos que se subiran
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };
    generateOrder(orden)
   
  };


  // subiro orden
   
    const generateOrder = (orden) => {
    const ordenesRef = collection(db, "orders");
    addDoc(ordenesRef, orden)
      .then((respuesta) => setIdOrden(respuesta.id))
      .catch((error)=> console.log(error))
      .finally(()=> {
   
        //luego vaciar carrito
        vaciarCarrito()
      })
  };


  return (
    <div className="checkout">
      {idOrden ? (
        <div className="order-generated">
          <h2>Orden generada con exito!🤩</h2>
          <p> guarde el id de su orden: {idOrden} </p>
        </div>
      ) : (
        <Formulario
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};
export default Checkout;