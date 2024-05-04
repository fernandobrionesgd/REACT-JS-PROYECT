import "./ItemListContainer.scss"

import ItemList from "./ItemList";
import getProducts from "../../data/data"
import { useEffect,useState } from "react"

const ItemListContainer = ({saludo}) => {
                                    // array vacio porque luego vamos a guardar un array
                                    // creamos variable de estado
    const [products, setProducts] = useState([])

   
   
    // Cada vez que se modifique una variable de estado -> "setProducts(respuesta)" , el componente se vuelve a renderizar = disparar. Entonces , usaremos useEffect para que se ejecute 1 vez
    // en su mayoria useEffect y una variable de estado como (setProducts) van juntos
    useEffect ( () => {

        //llamada a una "API" de datos (en este caso función)
        getProducts()
        .then((respuesta) => {
           setProducts(respuesta) // respuesta que es el output de la llamada 
        } )
        // por si hay un error
        .catch(  (error)=> { 
          console.error (error)
        })
        .finally(() => {
           console.log ("Finaliso la promesa")
        });
       
    //console.log(products)
    // aqui ponemos el array vacio para que solo se ejecute 1 vez
    }, []);

    return (
        // le pasamos una prop de products a ItemList
        <div className='item-list-container'> 
            <p>{saludo}</p> 
            <ItemList  products= {products}/> 
        </div>
    )
}

export default ItemListContainer