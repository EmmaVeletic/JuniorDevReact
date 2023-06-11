//import wonderWoman from './wonderwoman.jpg'
import './ImeSlika.css'

function ImeSlika(props){

    return (
        <div className="firstPart">

          <h2>{props.nick}</h2> 
          <h1> {props.ime} </h1>
          
        <div className="picture">

          <img src='https://www.pngitem.com/pimgs/m/530-5303905_wonderwoman-power-girlpower-freetoedit-wonder-woman-cartoon-round.png' alt="Avatar" />
    
        </div>
          
        </div>
      );
    }

export default ImeSlika