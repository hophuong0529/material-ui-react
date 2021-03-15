import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import NewProduct from "./NewProduct";

export default function Brand() {
  return (
    <div className="home">
      <Banner />
      <BestSeller />
      <NewProduct />
    </div>
  );
}
