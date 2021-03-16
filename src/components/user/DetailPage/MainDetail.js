import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Grid, Typography } from "@material-ui/core";
import "./detail.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function MainDetail(props) {
  const product = props.product;
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="main-detail">
      <Grid container>
        <Grid item lg={7}>
          <div className="product-image">
            <Carousel style={{ width: "90%" }}>
              {product.images?.map((image) => (
                <Carousel.Item key={image.id}>
                  <img
                    className="d-block w-100"
                    src={process.env.REACT_APP_URL_IMAGE + image.path}
                    alt=""
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Grid>
        <Grid item lg={5} style={{ padding: 10 }}>
          <div className="product-content">
            <div className="product-title">
              <Typography variant="h6">{product.name}</Typography>
              <span className="pro-sku">
                <span>Mã sản phẩm: {product.code}</span>
              </span>
            </div>
            <div className="product-price">
              <span className="overflowed pro-price">
                <span className="tp_product_detail_price">
                  {product.price?.toLocaleString()}₫
                </span>
              </span>
            </div>
            <div className="product-description">
              <p className="tp_descrip">Mô tả</p>
              <div className="desc-content">
                <div className="description-productdetail">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
            <div className="selector-actions">
              <div className="select-quantity">
                <button onClick={() => decrease()}>
                  <RemoveIcon className="step-down" />
                </button>
                <input
                  id="quantity"
                  name="quantity"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button onClick={() => increase()}>
                  <AddIcon className="step-up" />
                </button>
              </div>
              <div className="wrap-addcart">
                <button className="btn-addToCart">Chọn mua</button>
              </div>
              <div className="multinventory">
                <button className="btn-fitting">Thử ngay tại showroom</button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
