import './ProductFilter.css';
import {useEffect, useState} from "react";
import {createParams, filtrateProducts} from "../../../utils/utils";

function ProductFilter({products,  setFiltratedProducts}) {
    const [isActive, setIsActive] = useState([false, false, false, false, false]);
    const [isChecked, setIsChecked] = useState([true, false, false, false])
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
        {name: "Tenisky", value: "sport"},
        {name: "Komfortná obuv", value: "casual"},
        {name: "Formálna obuv", value: "formal"},
        {name: "Obuv na doma", value: "home"},
        {name: "Outdoorová obuv", value: "outdoor"}
    ]

    useEffect(() => {
        setButtonStyle(isActive.map(isActive => isActive ? buttonClass.active : buttonClass.default));
    }, [isActive, buttonClass]);

    useEffect(() => {
        const params = createParams(genderCategory, typeCategory, [...isChecked], [...isActive]);
        const filtrated = filtrateProducts(products, params);
        setFiltratedProducts(filtrated);

    },[isActive, isChecked])

    const handleButton = (index) => {
        setIsActive(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    }

    const handleRadio = (index) => {
        setIsChecked(prevState => {
            const newState = prevState.map(() => false);
            newState[index] = true;
            return newState;
        })
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
                                checked={isChecked[index]}
                                value={category.value}
                                onChange={() => handleRadio(index)}
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