import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  navBar: {
    position: "fixed",
    width: "100%",
    zIndex: "1100",
    padding: 25,
    backgroundColor: "#fffdfe!important",
    marginBottom: 0,
    border: 0,
    borderRadius: 0,
    boxShadow: "0 0 20px 0 rgb(249 69 121 / 15%)",
    transition: "all .8s ease",
  },
}));
export default function NavBar() {
  const classes = useStyles();

  return (
    <Navbar bg="light" variant="light" className={classes.navBar}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" style={{ width: 150, height: 57.6 }} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/" style={{ fontWeight: "bold" }}>
            Trang chủ
          </Nav.Link>
          <Nav.Link href="#features">Áo</Nav.Link>
          <Nav.Link href="#pricing">Quần</Nav.Link>
          <Nav.Link href="#pricing">Set</Nav.Link>
          <Nav.Link href="#pricing">Phụ kiện</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
