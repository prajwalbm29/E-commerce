import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../popular/Popular";
import Offers from "../Offers/Offers";
import NewCollections from '../NewColllections/NewCollections'
import NewsLetter from '../NewsLetter/NewsLetter'

function Shop() {
    return(
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop