import {createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const ProductsContext = createContext({
    products:[],

});

export const ProductsProvider = ({children}) =>{
    const [products , setProducts] = useState([]);

    useEffect(() =>{
        const getCategoriesMap = async () =>{
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap);
        };
        getCategoriesMap();
    }, []);
    // useEffectin async function ile kullanılabilmesi için kendi async functionumuzu oluşturmamız gerekiyor.
    
    const value = {products};

    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}

// import SHOP_DATA from "../shop-data.js";
// useEffect(() =>{
//     addCollectionAndDocuments("categories" , SHOP_DATA);
// }, [])
//firestore'a verileri yükleme yapmak için 1 seferlik useeffect kullandım.
