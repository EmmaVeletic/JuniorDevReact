import UnosOdjece from './components/UnosOdjece'
import { useState, useEffect } from "react"
import axios from "axios"
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import stil from './App.module.css'
import Filter from './components/Filter'




function App() {

  const [dataForm, setData] = useState({

    id: "",
    name: "",
    category: "",
    price: "",
    size: "",
    color: "#e66465",
    date: "2023-01-01",
    picture: ""
  })

  const [products, setProducts] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [idPodatka, postaviId] = useState(0);
  const [search, setNewSearch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/")
      .then((data: any) => {
        setProducts(data.data);
        setNewSearch(data.data);
      });

  }, []);

  function brisiPodatak(id) {

    console.log(`Brišem podatak broj ${id}`);
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(rez => {
        axios
          .get("http://localhost:3000/products")
          .then(res => setProducts(res.data));
      })
  }
  function promjenaUlaza(event) {
    const { name, value } = event.target;
    setData({ ...dataForm, [name]: value });
  }

  function promijeniPodatak() {

    const id = idPodatka

    axios.put(`http://localhost:3000/products/${id}`, {
      name: dataForm.name,
      category: dataForm.category,
      price: dataForm.price,
      size: dataForm.size,
      color: dataForm.color,
      date: dataForm.date,
      picture: dataForm.picture

    })
      .then(rez => {
        axios
          .get("http://localhost:3000/products")
          .then(res => setProducts(res.data));
      })
  }



  function promijeni(id) {
    setShowUpdate(true)
    postaviId(id)
  }

  function postaviDetalje() {
    setShowDetails(true)
  }

  const alertBefore = (id) => {

    confirmAlert({
      title: 'Confirm to submit delete',
      message: 'Are you sure to delete this product?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => brisiPodatak(id)
        },
        {
          label: 'No',
        }
      ]
    });
  }
  useEffect(() => {
    setNewSearch(products)
  }, [products]
  );

  const filterHandler = (data) => {
    setNewSearch(data);
  }


  return (
    <div>

      <h1 className={stil["naslov"]}>Moja garderoba</h1>
      <div className={stil["main-container"]}>
        <div className={stil["enter"]}>
          <UnosOdjece dodaj={setProducts}></UnosOdjece>
          <div className={stil["filter"]}>
            <Filter newProducts={products} onFilterChlothes={filterHandler} />
          </div>
        </div>

        <div className={stil["popis"]}>

          <h1 className={stil["naslov"]}>Popis garderobe</h1>
          {!showUpdate ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Size</th>
                  {showDetails ? (
                    <th><th>Color</th>
                      <th>Date</th>
                      <th>Picture</th></th>
                  ) : (
                    <th></th>
                  )}
                  <th>Options</th>

                </tr>
              </thead>
              <tbody>
                {
                  search.map(
                    item =>
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>{item.size}</td>
                        {showDetails ? (
                          <td><td>{item.color}</td>
                            <td>{item.date}</td>
                            <td><img width="150" height="160" src={item.picture} /></td></td>
                        ) : (
                          <td></td>
                        )}
                        <td>

                          <button onClick={() => promijeni(item.id)}>Update</button>
                          <button onClick={() => alertBefore(item.id)}>Delete</button>
                          <button onClick={() => postaviDetalje()}>Details</button>
                        </td>
                      </tr>
                  )
                }
              </tbody>
            </table>
          )
            : (
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Size</th>
                      <th>Color</th>
                      <th>Date</th>
                      <th>Picture</th>
                      <th>Options</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      search.map(
                        item =>
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>{item.size}</td>
                            <td>{item.color}</td>
                            <td>{item.date}</td>
                            <td>{item.picture}</td>
                            <td></td>
                            <td>

                              <button onClick={() => promijeni(item.id)}>Update</button>
                              <button onClick={() => brisiPodatak(item.id)}>Delete</button>
                            </td>
                          </tr>
                      )
                    }
                  </tbody>
                </table>
                <div>
                  <label>Ime:<input type="text" name="name" value={dataForm.name} onChange={promjenaUlaza} /></label>
                  <label>Cijena:<input type='number' name='price' value={dataForm.price} onChange={promjenaUlaza} /></label>
                  <label>Boja:<input type="color" name="color" value={dataForm.color} onChange={promjenaUlaza} /></label>
                  <label>Datum:<input type="date" name="date" value={dataForm.date} onChange={promjenaUlaza} /></label>
                  <button onClick={() => promijeniPodatak()}>Update</button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}


export default App
