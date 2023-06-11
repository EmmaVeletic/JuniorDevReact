import { useEffect, useState } from "react";

function Timer({start}){
    const [brojac, postaviBrojac] = useState(start);

    useEffect(() =>{
        if(brojac < 90){
            setTimeout(()=>postaviBrojac(brojac + 1), 60000);
        }
    },[brojac]);

    return(
        <div>
         <span>Timer: {brojac}' min</span>  
        </div>
           
    )
}

export default Timer;