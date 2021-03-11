import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/Add";
import { Avatar } from "@material-ui/core";
import avatar from "../assets/images/avatar.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 594,
    width: "85%",
    backgroundColor: "black",
    paddingTop: 40,
    color: "white",
    height: "100%",
    fontFamily: "Nunito",
  },
  avatarLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  adminInfo: {
    fontSize: 14.5,
    textAlign: "center",
    margin: "auto",
    paddingBottom: 15,
  },
  menu: {
    fontFamily: "Nunito",
    fontSize: 12,
  },
  icon: {
    marginTop: -2,
    color: "#e1b0b0",
    minWidth: 40,
  },
  name: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listItem: {
    marginLeft: 20,
    marginRight: 20,
    color: "#e1b0b0",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ManageList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <div className={classes.adminInfo}>
        <Avatar
          className={classes.avatarLarge}
          src={avatar}
          style={{ margin: "auto" }}
        />
        <p style={{ color: "white", fontWeight: "bold" }}>Admin</p>
      </div>

      <div className={classes.listItem}>
        <ListItem button>
          <ListItemIcon style={{ marginTop: -5 }} className={classes.icon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.menu,
            }}
            primary="Dashboard"
          />
        </ListItem>

        <ListItem button onClick={handleClick}>
          <ListItemIcon className={classes.icon}>
            <ListIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.menu,
            }}
            primary="Products"
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemLink href="/products" className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <VisibilityIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.menu,
                }}
                primary="Overview"
              />
            </ListItemLink>
            <ListItemLink href="/product/add" className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <AddIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.menu,
                }}
                primary="Add item"
              />
            </ListItemLink>
          </List>
        </Collapse>
      </div>
    </List>
  );
}
