import {createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
    categoriesMap:{},

});

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap , setCategoriesMap] = useState({});

    useEffect(() =>{
        const getCategoriesMap = async () =>{
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);
    // useEffectin async function ile kullanılabilmesi için kendi async functionumuzu oluşturmamız gerekiyor.
    
    const value = {categoriesMap};

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}

// import SHOP_DATA from "../shop-data.js";
// useEffect(() =>{
//     addCollectionAndDocuments("categories" , SHOP_DATA);
// }, [])
//firestore'a verileri yükleme yapmak için 1 seferlik useeffect kullandım.
