import { useState, useEffect } from "react"
import axios from "axios"
import stil from './UnosOdjece.module.css'

function UnosOdjece(props) {

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
    const [category, setCategory] = useState([]);
    const [size, setSize] = useState([]);


    function promjenaUlaza(event) {
        const { name, value } = event.target;
        setData({ ...dataForm, [name]: value });
    }

    useEffect(() => {
        axios
            .get("http://localhost:3000/category")
            .then(rez => setCategory(rez.data))
            .catch(err => console.log(err.message));
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:3000/size")
            .then(rez => setSize(rez.data))
            .catch(err => console.log(err.message));
    }, []);

    function obradiPodatke(objekt) {
        return {
            "name": objekt.name,
            "category": objekt.category,
            "price": Number(objekt.price),
            "size": objekt.size,
            "color": objekt.color,
            "date": objekt.date,
            "picture": objekt.picture

        }
    }

    const sendData = event => {
        event.preventDefault();
        console.log(dataForm);

        const zaSlanje = obradiPodatke(dataForm)

        axios.post('http://localhost:3000/products', zaSlanje)
            .then(rez => {
                props.dodaj(stanje => [...stanje, rez.data])
            })
    }



    return (
        <div className={stil["forma"]}>

            <form onSubmit={sendData}>
                <p>
                    <label>Ime:</label>
                    <input className={stil["input"]} type='text' name='name' value={dataForm.name} onChange={promjenaUlaza} />
                </p>
                <p>
                    <label>Cijena:</label>
                    <input className={stil["input"]} type='number' name='price' value={dataForm.price} onChange={promjenaUlaza} />
                </p>
                <p>
                    <label>Kategorija:</label>
                    <select className={stil["select-menu"]} name='category' value={dataForm.category} onChange={promjenaUlaza} required>
                        <option value=''>--Odaberi kategoriju--</option>
                        {category.map(item => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>

                </p>
                <p>
                    <label>Boja:</label>
                    <input className={stil["input"]} type="color" name="color" value={dataForm.color} onChange={promjenaUlaza} />

                </p>
                <p>
                    <label>Veličina:</label>
                    <select className={stil["select-menu"]} name='size' value={dataForm.size} onChange={promjenaUlaza} required>
                        <option value=''>--Odaberi veličinu--</option>
                        {size.map(item => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>

                </p>
                <p>
                    <label>Datum:</label>
                    <input className={stil["input"]} type="date" name="date" value={dataForm.date} onChange={promjenaUlaza} />

                </p>
                <p>
                    <label>Slika (path slike):</label>
                    <input className={stil["input"]} type="path" name="picture" accept="image/*" value={dataForm.picture} onChange={promjenaUlaza} />

                </p>

                <button type='submit'>Save</button>

            </form>

        </div>
    )
}

export default UnosOdjece