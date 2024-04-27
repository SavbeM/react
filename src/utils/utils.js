
export const createParams = (categories, types,  categoryState, typeSate) => {
    const typesValues = [];
    const category = categories[categoryState.indexOf(true)];
    const categoryValue = category ? category.value : null;

    typeSate.forEach((state, index) => state ? typesValues.push(types[index].value)  : null);

    return {
        categoryValue,
        typesValues
    }
}


export const filtrateProducts = (products, params) => {

    const filtrated = [];

    products.forEach((product) => {
        let typeMatch = false;
        let categoryMatch = false

        if (params.typesValues.length === 0) {
            typeMatch = true
        } else {
            for (let i = 0; i < params.typesValues.length; i++) {
                if (params.typesValues[i] === product.type) {
                    typeMatch = true;
                    break;
                }
            }
        }


        if (params.categoryValue){
            categoryMatch = product.category === params.categoryValue || params.categoryValue === "all"
        }
        if (typeMatch && categoryMatch){
            filtrated.push(product);
        }
    })

    return [...filtrated];
}