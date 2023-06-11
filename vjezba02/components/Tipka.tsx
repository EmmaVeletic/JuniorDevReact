import './Tipka.css'


function Tipka(props){

    function handleClick(){
        props.akcija()
        props.akcija1()
        props.akcija2()
        
    }

    return(

            <button onClick={handleClick}>{props.natpis}</button>
           
    )
   }

export default Tipka