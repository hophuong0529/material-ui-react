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
import avatar from "../../../assets/images/avatar.jpg";
import "./ad-sidebar.css";

const useStyles = makeStyles((theme) => ({
  avatarLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  menu: {
    fontFamily: "Nunito",
    fontSize: 12,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    "&:hover": {
      color: "white",
    },
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function AdSideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="list-menu"
    >
      <div className="admin-info">
        <Avatar
          className={classes.avatarLarge}
          src={avatar}
          style={{ margin: "auto" }}
        />
        <p style={{ color: "white", fontWeight: "bold" }}>Admin</p>
      </div>

      <div className="list-item">
        <ListItem button>
          <ListItemIcon style={{ marginTop: -5 }} className="icon">
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
          <ListItemIcon className="icon">
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
            <ListItemLink href="/admin/products" className={classes.nested}>
              <ListItemIcon className="icon">
                <VisibilityIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.menu,
                }}
                primary="Overview"
              />
            </ListItemLink>
            <ListItemLink href="/admin/product/add" className={classes.nested}>
              <ListItemIcon className="icon">
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
