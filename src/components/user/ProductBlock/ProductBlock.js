import React from "react";
import "./productBlock.css";
import Product from "../Product/Product";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ProductBlock(props) {
  const classes = useStyles();
  const products = props.products;
  return (
    <div className="blockSlide tp_product_betseller">
      <div className="prdTitle bg">
        <h2>
          <span className="title-name">{props.title}</span>
          <b className="title-line"></b>
        </h2>
      </div>
      <Grid container className={classes.root} spacing={3}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
}
