import React from "react";
import './App.css';

import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";

export default function App() {
  return (
    <div className="App">
      <Topo/>

      <SecaoBanner/>

      <SecaoExperienciaTrabalho/>      
    </div>
  );
}


