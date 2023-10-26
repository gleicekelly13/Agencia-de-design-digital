import { useState } from "react";
import './App.css';

import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Card from "./componentes/Card";
import Rodape from "./componentes/Rodape";

export default function App() {
  
  const [ehTemaClaro, setEhTemaClaro] = useState(true);

  const alterarTema = () => {
    setEhTemaClaro(!ehTemaClaro);
    /*if(ehTemaClaro) {
      setEhTemaClaro(false);
    } else {
      setEhTemaClaro(true);
    } */
  }

  return (
    <div className="App">
      <Topo alterarTema={alterarTema} ehTemaClaro={ehTemaClaro}/>

      <SecaoBanner ehTemaClaro={ehTemaClaro}/>

      <SecaoExperienciaTrabalho ehTemaClaro={ehTemaClaro}/>    

      <Card ehTemaClaro={ehTemaClaro}/>

      <Rodape ehTemaClaro={ehTemaClaro}/>  
    </div>
  );
}


/*if(ehTemaClaro) é o msmo de if(ehTemaClaro === true) */