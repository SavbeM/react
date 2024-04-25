import './ProductFilter.css';

function ProductFilter(){
 return(  
    <>

        <div className="filter-container">
            <input 
                type="radio" 
                name="filter" 
                value="all"
            />
            <span>Všetko</span>
            
            <input 
                type="radio" 
                name="filter" 
                value="men"
            />
            <span>Pánska obuv</span>

            <input 
                type="radio" 
                name="filter" 
                value="women" 
            />
            <span>Dámska obuv</span>

            <input 
                type="radio" 
                name="filter" 
                value="kids" 
            />
        <span>Detská obuv</span>
        </div>

        <div className="category-container">
            <button className="custom-button">Tenisky</button>
            <button className="custom-button">Komfortná obuv</button>
            <button className="custom-button">Formálna obuv</button>
            <button className="custom-button">Obuv na doma</button>
            <button className="custom-button">Outdoorová obuv</button>
        </div>

    </> 
);


}

export default ProductFilter;