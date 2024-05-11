import "./ItemListContainer.scss"
import ItemList from "./ItemList";
import getProducts from "../../data/data"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";

const ItemListContainer = ({saludo}) => {
                                    // array vacio porque luego vamos a guardar un array
                                    // creamos variable de estado
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()
   
   
    // Cada vez que se modifique una variable de estado -> "setProducts(respuesta)" , el componente se vuelve a renderizar = disparar. Entonces , usaremos useEffect para que se ejecute 1 vez
    // en su mayoria useEffect y una variable de estado como (setProducts) van juntos
    useEffect(() => {
        getProducts()
          .then((respuesta) => {
            if(idCategory){
              //filtrar la data por la categoria que almacena idCategory
              const productsFilter = respuesta.filter( (productRes)=> productRes.category === idCategory )
              setProducts(productsFilter)
            }else{
              //al no existir categoria guardamos todos los productos
              setProducts(respuesta);
            }
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            console.log("Finalo la promesa");
          });
      }, [idCategory]);

    return (
        // le pasamos una prop de products a ItemList
        <div className='item-list-container'> 
            <p>{saludo}</p> 
            <ItemList  products= {products}/> 
        </div>
    )
}

export default ItemListContainer