import stil from './Sazetak.module.css'

function Sazetak(props) {


  return (
    
    <div className={stil["main-sazetak"]}>
        <h3>Podaci o korisniku</h3>
        <label className={stil["label"]}>Email</label>
        <p>{props.data["email"]}</p>
        <label className={stil["label"]}>Ime </label>
        <p>{props.data["name"]}</p>
        <label className={stil["label"]}>Država </label>
        <p>{props.data["country"]}</p>
        <label className={stil["label"]}>Adresa</label>
        <p>{props.data["address"]}</p>
        <label className={stil["label"]}>Način plaćanja</label>
        <p>{props.data["payment"]}</p>
      </div>            
    
  )
}

export default Sazetak
