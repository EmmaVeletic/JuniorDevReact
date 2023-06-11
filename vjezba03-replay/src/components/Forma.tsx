import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import stil from './Forma.module.css'
import Sazetak from './Sazetak';


function Forma() {
    const [terms, setTerms] = useState(false);
    const [showData, setShowData] = useState(false);
    const [data, setData] = useState({
    name: "",
    email: "",
    country: "",
    address: "",
    payment: "",
  })
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [disable, setDisable] = useState(false);

    const acceptTerms = () => {
      setTerms(true)
    }

    const buttonHandler = (e) => {
      e.preventDefault()
      
      if (terms === false){
        alert('You have not accepted the terms of the order!')
        setShowData(false)
      }
      else{
        setShowData(true)
      }
    }
      
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
    }

    const handleEmailInput = (e) => {
      const value = e.target.value;
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      if(!(value.match(regex))) {
        setError(true)  
    }
  }

    const handleNameInput = (e) => {
      const value = e.target.value;
      if(value.length < 3) {
        setError(true)  
    }
  }

  const handleAddressInput = (e) => {
    const value = e.target.value;

    if(value.length < 5 || !(value.match(/\d/))) {
      setError(true)  
  }
}

  useEffect(() => {
    if(error === true) {
        setShowError(true)
        setDisable(true)
    }
}, [error]);

    
  
    return (
      <div className={stil["main-container"]}>
      <div className={stil["header"]}>
        <p>Račun &#8594; <b>Plaćanje</b></p>
      </div>
      {showError && <p className={stil["error"]}>User input is invalid!</p>}
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={stil["label"]}>Email:</Form.Label>
        <Form.Control type="email" placeholder="Email adresa..." name="email" value={data.email} onChange={handleChange} onBlur={e => handleEmailInput(e)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={stil["label"]}>Ime:</Form.Label>
        <Form.Control type="text" name="name" value={data.name} onChange={handleChange} onBlur={e => handleNameInput(e)} required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={stil["label"]}>Izaberi državu:</Form.Label>
        <Form.Select aria-label="Default select example" name="country" onChange={handleChange} value={data.country} required>
          <option>Otvori meni</option>
          <option value="Hrvatska">Hrvatska</option>
          <option value="BiH">BiH</option>
          <option value="Srbija">Srbija</option>
          <option value="Slovenija">Slovenija</option>
          <option value="Crna Gora">Crna Gora</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={stil["label"]}>Adresa:</Form.Label>
        <Form.Control type="text" name="address" value={data.address} onChange={handleChange} onBlur={e => handleAddressInput(e)} required/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label className={stil["label"]}>Način plaćanja:</Form.Label>
          <Form.Check
            inline
            label="Pouzeće"
            name="payment"
            value="Pouzeće"
            checked={data.payment === "Pouzeće"}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="Kartica"
            name="payment"
            value="Kartica"
            checked={data.payment === "Kartica"}
            onChange={handleChange}
          />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Prihvaćam uvjete narudžbe" onChange={acceptTerms} />
      </Form.Group>
      <Button disabled = {disable} variant="primary" type="submit" onClick={buttonHandler}>
        Naruči
      </Button>
    </Form>
    
    {showData  && <Sazetak data={data}></Sazetak>}
    
    </div>
    )
}

export default Forma
