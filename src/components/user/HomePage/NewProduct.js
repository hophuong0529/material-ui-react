import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductBlock from "../ProductBlock/ProductBlock";

export default function Brand() {
  const [products, setProducts] = useState([]);
  const [title] = useState("Sản phẩm mới nhất");
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/latest-product").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div className="tp_product_new">
      <ProductBlock products={products} title={title} />
    </div>
  );
}
