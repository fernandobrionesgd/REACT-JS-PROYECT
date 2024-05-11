import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (

    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer saludo="Bienvenidos a Fharo, el lugar donde aprenderás todo lo que necesitas para tu carrera de negocios" /> } />
          <Route path="/category/:idCategory" element={ <ItemListContainer saludo="Bienvenidos a Fharo, el lugar donde aprenderás todo lo que necesitas para tu carrera de negocios" /> } />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App