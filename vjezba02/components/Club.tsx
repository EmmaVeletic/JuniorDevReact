import './Club.css'


function Club(props){
 
    return(
        <div>
                {props.name == "Manchester United" && <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png" alt="Manutd"/>}
                {props.name == "Chelsea" && <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png" alt="Chelsea"/>}
                <p>{props.name}</p>
        </div>
        
    )
   }

export default Club