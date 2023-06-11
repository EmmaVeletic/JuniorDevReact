import { useState } from "react";
import Tipka from './Tipka';
import './Statistika.css'


function Statistika(props){

    const [kartoni, postaviKartone] = useState({prvi: 0, drugi: 0});
    const [udarci, postaviUdarce] = useState({prvi: 0, drugi: 0});
    const [prekrsaji, postaviPrekrsaje] = useState({prvi: 0, drugi: 0});

    function povecajPrviKarton(){
        let novi = {...kartoni}
        novi.prvi += 1
        postaviKartone(novi)
      }
      function povecajDrugiKarton(){
        let novi = {...kartoni}
        novi.drugi += 1
        postaviKartone(novi)
      }

      function povecajPrviUdarac(){
        let novi = {...udarci}
        novi.prvi += 1
        postaviUdarce(novi)
      }
      function povecajDrugiUdarac(){
        let novi = {...udarci}
        novi.drugi += 1
        postaviUdarce(novi)
      }

      function povecajPrviPrekrsaj(){
        let novi = {...prekrsaji}
        novi.prvi += 1
        postaviPrekrsaje(novi)
      }
      function povecajDrugiPrekrsaj(){
        let novi = {...prekrsaji}
        novi.drugi += 1
        postaviPrekrsaje(novi)
      }

    return(
   <div className="main">
    <h2>Statistika</h2>
    <div className="child">
        <h3>{props.name1}</h3>
        <p>Udarci: {udarci.prvi} <Tipka akcija={povecajPrviUdarac} natpis='+'></Tipka></p>
        <p>Prekršaji: {prekrsaji.prvi} <Tipka akcija={povecajPrviPrekrsaj} natpis='+'></Tipka></p>
        <p>Kartoni: {kartoni.prvi} <Tipka akcija={povecajPrviKarton} natpis='+'></Tipka></p>
    </div>
    <div className="child">
        <h3>{props.name2}</h3>
        <p>Udarci: {udarci.drugi} <Tipka akcija={povecajDrugiUdarac} natpis='+'></Tipka></p>
        <p>Prekršaji: {prekrsaji.drugi} <Tipka akcija={povecajDrugiPrekrsaj} natpis='+'></Tipka></p> 
        <p>Kartoni: {kartoni.drugi} <Tipka akcija={povecajDrugiKarton} natpis='+'></Tipka></p>
    </div>
    <Tipka akcija={() => {postaviKartone({prvi: 0, drugi: 0})}}
           akcija1={() => {postaviUdarce({prvi: 0, drugi: 0})}}
           akcija2={() => {postaviPrekrsaje({prvi: 0, drugi: 0})}}
          natpis='Reset'></Tipka>
   </div>
)
}

export default Statistika