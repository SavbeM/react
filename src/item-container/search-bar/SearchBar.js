import React, {useEffect} from "react";
import './SearchBar.css'
import {useState} from "react";


function SearchBar({setSearchedProducts, products, filtratedProducts}){
    const [searchText, setSearchText] = useState("");
    const [searchValue, setSearchValue] = useState("")
    const [data, setData] = useState(null)

    useEffect(() => {
        const currentData = filtratedProducts ? filtratedProducts : products;
        setData(currentData);
    }, [products, filtratedProducts]);

    const handleInput = (text) => {
        setSearchText(text);
    }

    const handleSubmit = () => {
        setSearchValue(searchText);
    }

    useEffect(() => {
        if (data) {
            const searchedProducts = data.filter((product) => product.name.toUpperCase().includes(searchValue.toUpperCase()));
            setSearchedProducts(searchedProducts);
        }

    }, [data, searchValue])


    return(
        <div className="search-bar-container">
            <input type="text" value={searchText} onChange={(event) => handleInput(event.target.value)} className="search-bar-input" />
            <button type="submit" onClick={handleSubmit} className="button">Hľadaj</button>
        </div>
    );
}

export default SearchBar;