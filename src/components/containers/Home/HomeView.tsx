import React from "react";
import { Banner } from "./Banner/Banner";
import { Slider } from "./Sliders/Slider";
import { Categories } from "./Categories/Categories";
import { ShopByCollections } from "../ShopBy/ShopByCollections";
import "./Style.scss";

export const HomeView = () => {
 
  return (
    <React.Fragment>
   
        <Banner />
          <Slider />
          <Categories title="ShopBy Categories" />
          <Categories>
            <ShopByCollections />
          </Categories>
     
    </React.Fragment>
  );
};

export default HomeView;
