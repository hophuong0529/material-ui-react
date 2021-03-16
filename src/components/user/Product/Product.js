import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./product.css";

export default function Product(props) {
  const product = props.product;
  return (
    <Grid item xs={3} className="product-item">
      <Card variant="outlined">
        <CardContent style={{ padding: 2 }}>
          <div className="image">
            <img
              src={process.env.REACT_APP_URL_IMAGE + product.images[0].path}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="name">
            <Link to={"/product/" + product.id} className="link-detail">
              {product.name}
            </Link>
          </div>
          <div className="price">
            <span>{product.price?.toLocaleString()}₫</span>
          </div>
        </CardContent>
        <CardActions style={{ float: "right" }}>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
