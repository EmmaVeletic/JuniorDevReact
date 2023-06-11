import stil from './Filter.module.css'
import { useRef } from 'react';



function Filter(props) {


    let filterSizePrev = useRef('');
    const chlothes = props.newProducts;

    
    const onChangeSizeHandler = (event) => {
        filterSizePrev.current = event.target.value;
        filterClothes();
    }

    const filterClothes = () => {
        let filterSize: string = filterSizePrev.current;
        let filteredProducts: any;

        if(filterSize === "") {
            props.onFilterChlothes(chlothes);
            return;
        }
        if(filterSize !== "") {
            filteredProducts = chlothes.filter((chlothe: any) => chlothe.size === filterSize);
        }
        
        if(filterSize === "") {
            filteredProducts = chlothes.filter((chlothe: any) => chlothe.size === filterSize);
        }
        props.onFilterChlothes(filteredProducts);
    }

    return(
        <div>
                <h1>Filter size</h1>
                <select  className={stil["select-menu"]} name="size" onChange={onChangeSizeHandler}>
                    <option value="">Izaberi veličinu</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
        </div>
    )
}export default Filter