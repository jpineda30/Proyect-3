import React from "react";
import Home from "../pages/home";
import Patients from "../pages/patients";
import Services from "../pages/services";
import Appointments from "../pages/appointments";
import User from "../pages/user";

import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useStoreContext } from "../../utils/globalState";

function Wrapper(props) {
  const { isLogged } = useStoreContext();

  const main = () => <Home userState={props.isLogged} />;

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {isLogged ? <User /> : main}
          </Route>

          <Route exact path="/services">
            {isLogged ? <Services></Services> : <Redirect to="/" />}
          </Route>

          <Route exact path="/appointments">
            {isLogged ? <Appointments></Appointments> : <Redirect to="/" />}
          </Route>

          <Route exact path="/patients">
            {isLogged ? <Patients></Patients> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Wrapper;
