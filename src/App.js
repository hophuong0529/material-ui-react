import "./App.css";
import AdNavBar from "./components/admin/Ad-NavBar";
import AdSideBar from "./components/admin/Ad-SideBar";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Overview from "./components/admin/product/Overview";
import Add from "./components/admin/product/Add";
import Edit from "./components/admin/product/Edit";
import "@fontsource/nunito";
import NavBar from "./components/user/NavBar";
import Home from "./components/user/HomePage/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/">
          <Grid container>
            <Grid item xs={12}>
              <AdNavBar />
            </Grid>
            <Grid item xs={2}>
              <AdSideBar />
            </Grid>
            <Grid item xs={10}>
              <Router>
                <Switch>
                  <Route exact path="/admin/products" component={Overview} />
                  <Route path="/admin/product/add" component={Add} />
                  <Route path="/admin/product/edit/:id" component={Edit} />
                </Switch>
              </Router>
            </Grid>
          </Grid>
        </Route>
        <Route path="/">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}
