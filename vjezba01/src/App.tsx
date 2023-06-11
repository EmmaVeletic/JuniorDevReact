import './App.css'
import Zivotopis from './components/Zivotopis';
import Sposobnosti from './components/Sposobnosti';
import ImeSlika from './components/ImeSlika';
import Progresi from './components/Progresi';


function App() {
  
  return (   
    <div>
      <div className="parts">
        <ImeSlika nick={"Ema"} ime={"Emma Veletić"}></ImeSlika>
      </div>
      <div className="parts">
        <Zivotopis datum={"10.8.1993"} adresa ={"Šoltanska 20"} kontakt={"0919895239"}></Zivotopis>
      </div>
      <div className="parts">
      <Sposobnosti>
        <Progresi html={"85"} css={"75"} js={"60"} react={"20"}></Progresi>
      </Sposobnosti>
      </div>
      
    </div>
   
  )
}

export default App


