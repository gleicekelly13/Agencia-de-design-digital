import React from "react";
import './App.css';

import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";

export default function App() {
  return (
    <div className="App">
      <Topo/>

      <SecaoBanner/>
    </div>
  );
}


