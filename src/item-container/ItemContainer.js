import ProductList from "./product-list/ProductList";
import './ItemContainer.css'
import SearchBar from "./search-bar/SearchBar";
import {useEffect, useState} from "react";
import {getProducts} from "../services/ProductListProvider";

function ItemContainer() {
    const [products, setProducts] = useState(null);
    const [filtratedProducts, setFiltratedProducts] = useState(null);
    const [searchedProducts, setSearchedProducts] = useState(null);

    useEffect(  () => {
        async function fetchData (){
            try {
                return getProducts();
            }
            catch (error){
                console.log(error);
            }
        }
        fetchData().then((data) => setProducts(data));
    }, [])


    return(
    <>
    <SearchBar products={products} filtratedProducts={filtratedProducts} setSearchedProducts={setSearchedProducts}></SearchBar>
    <div className="item-container">
        <ProductList products={products} filtratedProducts={filtratedProducts} setFiltratedProducts={setFiltratedProducts}  searchedProducts={searchedProducts}></ProductList>
    </div>
    </>
    
    );

}

export default ItemContainer;