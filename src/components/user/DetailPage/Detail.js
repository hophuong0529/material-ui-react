import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Breadcrumb from "../Breadcrumb";
import Sidebar from "../Sidebar/Sidebar";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "./detail.css";
import MainDetail from "./MainDetail";

export default function Detail() {
  const [product, setProduct] = useState([]);
  const slug = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/product/${slug.id}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [slug.id]);
  return (
    <div className="detail">
      <Breadcrumb product={product} className="breadcrumb" />
      <div className="product-detail">
        <Grid container>
          <Grid item lg={2}>
            <Sidebar />
          </Grid>
          <Grid item lg={10}>
            <MainDetail product={product} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
