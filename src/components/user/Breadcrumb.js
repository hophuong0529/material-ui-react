import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fafafa",
    padding: 8,
    paddingLeft: "5%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Breadcrumb(props) {
  const classes = useStyles();
  const breadcrumb = props.product.category?.name;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link style={{ color: "gray", textDecoration: "none" }} to="/">
              <span style={{ fontSize: 13.5 }}>Trang chủ</span>
            </Link>
            <Typography color="textPrimary" style={{ fontSize: 13.5 }}>
              {breadcrumb}
            </Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </div>
  );
}
