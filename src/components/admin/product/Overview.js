import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  table: {
    marginRight: 30,
    minWidth: 650,
  },
  thead: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 14.5,
  },
  title: {
    fontFamily: "Nunito",
    color: "rgb(255 142 161)",
    textAlign: "center",
    padding: "15px 0px 20px 0px",
    fontWeight: "bold",
  },
  row: {
    fontFamily: "Nunito",
  },
});

export default function Overview() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const handleDelete = (item) => {
    const productId = item.id;
    axios
      .post(`http://127.0.0.1:8000/api/product/delete`, { productId })
      .then(() => {
        setProducts(products.filter((x) => x.id !== item.id));
        alert("Delete success.");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      setProducts(response.data.data);
    });
  }, []);

  return (
    <div style={{ margin: "20px 35px 0px 0px" }}>
      <Typography className={classes.title} variant="h4">
        Manage Products
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "rgb(255 182 195)" }}>
              <TableCell
                style={{ width: "5%" }}
                className={classes.thead}
                align="center"
              >
                ID
              </TableCell>
              <TableCell
                style={{ width: "10%" }}
                className={classes.thead}
                align="center"
              >
                Image
              </TableCell>
              <TableCell
                style={{ width: "30%" }}
                className={classes.thead}
                align="center"
              >
                Name
              </TableCell>
              <TableCell
                style={{ width: "5%" }}
                className={classes.thead}
                align="center"
              >
                Code
              </TableCell>
              <TableCell
                style={{ width: "10%" }}
                className={classes.thead}
                align="center"
              >
                Price
              </TableCell>
              <TableCell
                style={{ width: "5%" }}
                className={classes.thead}
                align="center"
              >
                Quantity
              </TableCell>
              <TableCell
                style={{ width: "20%" }}
                className={classes.thead}
                align="center"
              >
                Description
              </TableCell>
              <TableCell
                style={{ width: "5%" }}
                className={classes.thead}
                align="center"
              >
                Category
              </TableCell>
              <TableCell
                style={{ width: "10%" }}
                className={classes.thead}
                align="center"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.row} align="center">
                  {row.id}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ padding: "5px 5px 0px 5px" }}
                >
                  <img
                    src={process.env.REACT_APP_URL_IMAGE + row.images[0].path}
                    alt=""
                    style={{ width: "80%", border: "#ffd9d6 thin solid" }}
                  />
                </TableCell>
                <TableCell className={classes.row} align="center">
                  {row.name}
                </TableCell>
                <TableCell className={classes.row} align="center">
                  {row.code}
                </TableCell>
                <TableCell className={classes.row} align="center">
                  {row.price}
                </TableCell>
                <TableCell className={classes.row} align="center">
                  {row.quantity}
                </TableCell>
                <TableCell className={classes.row} align="center">
                  {row.description}
                </TableCell>
                <TableCell className={classes.row} align="center">
                  {row.category.name}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    href={"/admin/product/edit/" + row.id}
                    style={{ padding: 8 }}
                  >
                    <EditRoundedIcon style={{ color: "#ffa6b6" }} />
                  </IconButton>
                  <IconButton
                    style={{
                      backgroundColor: "inherit",
                      border: "none",
                      padding: 8,
                    }}
                    onClick={() => {
                      if (window.confirm("Bạn muốn xóa sản phẩm này?"))
                        handleDelete(row);
                    }}
                  >
                    <DeleteRoundedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
