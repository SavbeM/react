import './ProductFilter.css';
import {useEffect, useState} from "react";

function ProductFilter() {
    const [isActive, setIsActive] = useState([false, false, false, false, false]);

    const buttonClass = {
        default: "custom-button",
        active: "active-button"
    }

    const [buttonStyle, setButtonStyle] = useState([buttonClass.default, buttonClass.default, buttonClass.default, buttonClass.default, buttonClass.default]);


    const genderCategory = [
        {name: "Všetko", value: "all"},
        {name: "Pánska obuv", value: "men"},
        {name: "Dámska obuv", value: "women"},
        {name: "Detská obuv", value: "kids"}
    ]

    const typeCategory = [
        {name: "Tenisky"},
        {name: "Komfortná obuv"},
        {name: "Formálna obuv"},
        {name: "Obuv na doma"},
        {name: "Outdoorová obuv"}
    ]
    useEffect(() => {
        setButtonStyle(isActive.map(isActive => isActive ? buttonClass.active : buttonClass.default));
    }, [isActive]);

    const handleButton = (index) => {
        setIsActive(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });

    }

    return (
        <>
            <div className="filter-container">
                {genderCategory.map((category, index) => {
                    return (
                        <div className="filter-item" key={index}>
                            <p>{category.name}</p>
                            <input
                                type="radio"
                                name="filter"
                                value={category.value}
                            />

                        </div>
                    )
                })}
            </div>

            <div className="category-container">
                {typeCategory.map((category, index) => {
                    return (
                        <button key={index} className={buttonStyle[index]}
                                onClick={() => handleButton(index)}>{category.name}</button>
                    )
                })}
            </div>

        </>
    );
}

export default ProductFilter;