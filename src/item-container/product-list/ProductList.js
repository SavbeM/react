import React from "react";
import ProductFilter from "./product-filter/ProductFilter";
import './ProductList.css';
import Product from "./product/Product";



function ProductList({products, filtratedProducts, setFiltratedProducts, searchedProducts}){


    const renderProducts = () => {
       if (searchedProducts){
           return searchedProducts.map((product) => (
               <Product key={product.id} product={product}/>
           ))
       }
        else if (filtratedProducts) {
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