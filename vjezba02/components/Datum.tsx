import { format } from 'date-fns'


function Datum(){
 
    return(
        <div>
                <h2>{format(new Date(), "dd-MM-yyyy")}</h2>
        </div>
        
    )
   }

export default Datum
   