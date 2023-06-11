import './App.css'
import { useState } from "react";
import Datum from "../components/Datum";
import Club from "../components/Club";
import Rezultat from '../components/Rezultat';
import Tipka from '../components/Tipka';
import Timer from '../components/Timer';
import Statistika from '../components/Statistika';


function App() {
  const [golovi, postaviGol] = useState({prvi: 0, drugi: 0});

  
  function povecajPrvi(){
    let novi = {...golovi}
    novi.prvi += 1
    postaviGol(novi)
  }

  function smanjiPrvi(){
    let novi = {...golovi}
    novi.prvi -= 1
    if(novi.prvi >= 0){
      postaviGol(novi)
    }
    else{
      alert("Nema negativnih rezultata!");
    }
    
  }

  function povecajDrugi(){
    let novi = {...golovi}
    novi.drugi += 1
    postaviGol(novi)
  }

  function smanjiDrugi(){
    let novi = {...golovi}
    novi.drugi -= 1
    if(novi.drugi >= 0){
      postaviGol(novi)
    }
    else{
      alert("Nema negativnih rezultata!");
    }
  }

  return (
    <div className="main">
      <Datum></Datum>
      <div className="firstClub">
      <Club name="Manchester United"></Club>
      </div>
      <div className='resultat'>
        <Rezultat goloviPrvog={golovi.prvi} goloviDrugog={golovi.drugi}></Rezultat>
        
      </div>
      <div className="secondClub">
      <Club name="Chelsea"></Club>
      </div>
      
      <div className='okvir'>
        <Tipka akcija={povecajPrvi} natpis='+'></Tipka>
        <Tipka akcija={smanjiPrvi} natpis='-'></Tipka>
        <Tipka akcija={povecajDrugi} natpis='+'></Tipka>
        <Tipka akcija={smanjiDrugi} natpis='-'></Tipka>
        <Tipka akcija={() => {postaviGol({prvi: 0, drugi: 0})}} natpis='Reset'></Tipka>
      </div>
      <div className="timer">
        <Timer start={0}></Timer>
      </div>
      <div>
        <Statistika name1="Manchester United" name2="Chelsea"></Statistika>
      </div>
    </div>
  )
}

export default App;
