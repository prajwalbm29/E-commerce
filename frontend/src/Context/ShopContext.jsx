import React, { createContext } from "react";
import all_products from '../assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (probs) {

    const contextValue = {all_products};

    return (
        <ShopContext.Provider value={contextValue}>
            {probs.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;