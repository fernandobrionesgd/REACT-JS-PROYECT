import "./ItemListContainer.scss";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  const getProducts = () => {
    const productsRef = collection(db, "items");
    getDocs(productsRef)
      .then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
        console.log("Productos obtenidos:", data); // Mensaje de depuración
      })
      .catch((error) => {
        console.error("Error obteniendo productos:", error); // Manejo de errores
      });
  };

  const getProductsByCategory = () => {
    const productsRef = collection(db, "items");
    const q = query(productsRef, where("category", "==", idCategory));
    getDocs(q)
      .then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
        console.log("Productos obtenidos por categoría:", data); // Mensaje de depuración
      })
      .catch((error) => {
        console.error("Error obteniendo productos por categoría:", error); // Manejo de errores
      });
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <p>{saludo}</p>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;