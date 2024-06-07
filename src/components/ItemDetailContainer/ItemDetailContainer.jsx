import { useState, useEffect } from "react";
import getProducts from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams()



  const getProduct = () => {
   
    const productRef = doc(db, "items", idProduct);
    getDoc(productRef)
      .then((productDb) => {
        //formateamos correctamente nuestro producto
        const data = { id: productDb.id, ...productDb.data() };
        setProduct(data);
      })
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]);

  return (
    <ItemDetail product={product} />
  );
};
export default ItemDetailContainer;