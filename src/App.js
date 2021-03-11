import "./App.css";
import NavBar from "./components/NavBar";
import ManageList from "./components/SideBar";
import { Grid } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Overview from "./components/product/Overview";
import Add from "./components/product/Add";
import Edit from "./components/product/Edit";
import "@fontsource/nunito"

export default function App() {
  return (
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={2}>
          <ManageList />
        </Grid>
        <Grid item xs={10}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/products" component={Overview} />
              <Route path="/product/add" component={Add} />
              <Route path="/product/edit/:id" component={Edit}/>
            </Switch>
          </BrowserRouter>
        </Grid>
      </Grid>
  );
}
