import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SaveIcon from "@material-ui/icons/Save";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      fontFamily: "Nunito",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  dropzone: {
    width: "82.6%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#ff9999",
    borderStyle: "dashed",
    backgroundColor: "#fff5f5",
    color: "#a1a1a1",
    outline: "none",
    transition: "border .24s ease-in-out",
    margin: "5px 0px 10px 0px",
  },
  checkboxLabel: {
    fontWeight: "bold",
    color: "rgb(255, 142, 161)",
    fontFamily: "Nunito",
  },
  buttonLabel: {
    margin: 0,
    fontFamily: "Nunito",
  },
  button: {
    height: 40,
    width: 150,
    marginRight: 15,
  },
}));

export default function Add() {
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);
  const classes = useStyles();
  const { getRootProps, getInputProps } = useDropzone();

  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [isTop, setIsTop] = useState(0);
  const [onSale, setOnSale] = useState(0);
  const [selectImages, setSelectImages] = useState([]);

  const handleImagesChange = (e) => {
    if (e.target.files) {
      setImages(e.target.files);

      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectImages((prevImages) => prevImages.concat(fileArray));
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <Grid item xs={3} style={{ position: "relative" }} key={photo}>
          <img
            src={photo}
            alt=""
            style={{ width: "90%", border: "#ffd9d6 thin solid" }}
          />
        </Grid>
      );
    });
  };

  const handleCreateProduct = (event) => {
    event.preventDefault();

    const formCreateData = new FormData();

    formCreateData.append("category_id", categoryId);
    formCreateData.append("name", name);
    formCreateData.append("code", code);
    formCreateData.append("quantity", quantity);
    formCreateData.append("price", price);
    formCreateData.append("description", description);
    formCreateData.append("is_top", isTop);
    formCreateData.append("on_sale", onSale);
    Array.from(images).forEach((el) => formCreateData.append("images[]", el));

    axios
      .post(`http://127.0.0.1:8000/api/products`, formCreateData)
      .then(() => {
        alert("Create success.");
        history.push("/products");
      });
  };

  return (
    <div>
      <Typography
        variant="h4"
        style={{
          fontFamily: "Nunito",
          color: "rgb(255 142 161)",
          textAlign: "center",
          padding: "40px 0 20px 0",
          fontWeight: "bold",
        }}
      >
        Create a Product
      </Typography>
      <form
        onSubmit={handleCreateProduct}
        className={classes.root}
        style={{ paddingLeft: 200, paddingRight: 30 }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          color="secondary"
          id="outlined-basic-code"
          label="Code"
          variant="outlined"
          style={{ width: "27.2%" }}
        />
        <TextField
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          color="secondary"
          id="outlined-basic-name"
          label="Name"
          variant="outlined"
          style={{ width: "50%" }}
        />
        <div style={{ paddingRight: 30, paddingBottom: 5 }}>
          <span
            style={{
              fontFamily: "Nunito",
              color: "rgb(255 142 161)",
              fontWeight: "bold",
            }}
          >
            Choose image(s):
          </span>
          <div {...getRootProps({ tabIndex: 0 })} className={classes.dropzone}>
            <input {...getInputProps()} onChange={handleImagesChange} />
            <span>Drag 'n' drop some files here, or click to select files</span>
          </div>
          <Grid container style={{ paddingRight: 150 }}>
            {renderPhotos(selectImages)}
          </Grid>
        </div>
        <div style={{ marginTop: 10 }}>
          <TextField
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            color="secondary"
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={6}
            variant="outlined"
            style={{ width: "80.3%" }}
          />
        </div>
        <FormControl
          variant="outlined"
          style={{ width: "20%" }}
          className={classes.formControl}
        >
          <InputLabel color="secondary" id="simple-select-outlined-label">
            Category
          </InputLabel>
          <Select
            name="category_id"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            color="secondary"
            style={{ width: "100%" }}
            className={classes.select}
            id="standard-select-currenc"
            label="Category"
            labelId="simple-select-outlined-label"
          >
            <MenuItem value="">Choose an option</MenuItem>
            {categories.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          color="secondary"
          id="outlined-basic-price"
          label="Price"
          variant="outlined"
          style={{ width: "20%" }}
        />
        <TextField
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          color="secondary"
          id="outlined-basic-quantity"
          label="Quantity"
          variant="outlined"
          style={{ width: "10%" }}
        />
        <div>
          <FormControlLabel
            style={{ paddingRight: 80 }}
            classes={{
              label: classes.checkboxLabel,
            }}
            className={classes.textLabel}
            control={
              <Checkbox
                name="is_top"
                value={isTop}
                onChange={(e) => (e.target.checked ? setIsTop(1) : setIsTop(0))}
              />
            }
            label="This is Top product"
          />
          <FormControlLabel
            classes={{
              label: classes.checkboxLabel,
            }}
            className={classes.textLabel}
            control={
              <Checkbox
                name="on_sale"
                value={onSale}
                onChange={(e) =>
                  e.target.checked ? setOnSale(1) : setOnSale(0)
                }
              />
            }
            label="This is Sale product"
          />
        </div>
        <div style={{ marginTop: 35, marginLeft: 270 }}>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            href="/products"
            startIcon={<ArrowBackIcon />}
          >
            <p className={classes.buttonLabel}>Back</p>
          </Button>
          <Button
            type="submit"
            className={classes.button}
            variant="outlined"
            color="secondary"
            startIcon={<SaveIcon />}
          >
            <p className={classes.buttonLabel}>Save</p>
          </Button>
        </div>
      </form>
    </div>
  );
}
