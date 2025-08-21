import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/popular";
import Offers from "../components/offers/Offers";
import NewCollection from "../components/newCollection/newCollection";
import NewsLetter from "../components/NewsLetter/NewsLetter";
 const Shop = ()=> {
    return(
      <>
        <Hero/>
        <Popular/>
        <Offers/>
 <NewCollection/>
 <NewsLetter/>
 
      </>
    )
 }
 export default Shop;