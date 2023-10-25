import { useState } from "react";
import './App.css';

import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Rodape from "./componentes/Rodape";

export default function App() {
  
  const [ehTemaClaro, setEhTemaClaro] = useState(true);

  const alterarTema = () => {
    setEhTemaClaro(!ehTemaClaro);
    /*if(ehTemaClaro === "modo-claro") {
      setEhTemaClaro("modo-escuro");
    } else {
      setEhTemaClaro("modo-claro");
    }*/
  }

  return (
    <div className="App">
      <Topo alterarTema={alterarTema} ehTemaClaro={ehTemaClaro}/>

      <SecaoBanner ehTemaClaro={ehTemaClaro}/>

      <SecaoExperienciaTrabalho ehTemaClaro={ehTemaClaro}/>    

      <Rodape ehTemaClaro={ehTemaClaro}/>  
    </div>
  );
}


