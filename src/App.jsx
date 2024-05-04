import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css';


function App() {

  return (

      <div>
          <NavBar />
          <ItemListContainer saludo = "Bienvenidos a Fharo, el lugar donde aprenderás todo lo que necesitas para tu carrera de negocios"/>
      </div>
  )
}

export default App