import ProductFilter from "./product-filter/ProductFilter";
import './ProductList.css';
import Product from "./product/Product";
import {useEffect, useState} from "react";
import {getProducts} from "../../services/ProductListProvider";



function ProductList(){
    const [products, setProducts] = useState(null);
    const [filtratedProducts, setFiltratedProducts] = useState(null);

    useEffect(  () => {
        async function fetchData (){
            try {
                const data = getProducts();
                return data;
            }
            catch (error){
                console.log(error);
            }
        }
        fetchData().then((data) => setProducts(data));
    }, [])

    const renderProducts = () => {
       if (filtratedProducts) {
         return filtratedProducts.map((product) => (
               <Product key={product.id} product={product}/>
           ))
       } else {
          return  products.map((product) => (
               <Product key={product.id} product={product}/>
           ))
       }
    }

    if (products) {
        return (
            <>

                <ProductFilter products={products} setFiltratedProducts={setFiltratedProducts}></ProductFilter>
                <div className="product-list">
                    {renderProducts()}
                </div>
            </>
        );
    }
    else {
        return (
            <div>
                Sorry, can't get a data from server. Please refresh the page.
            </div>
        )
    }
}

export default ProductList;