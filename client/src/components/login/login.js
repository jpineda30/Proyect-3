import React, { useRef, useState } from "react";
import { useStoreContext } from "../../utils/globalState";
import Logo from "../general/logo";
import Redirect from "react-router-dom";
import API from "../../utils/API-";
import { withRouter } from "react-router-dom";

function LogIn(props) {
  //let user = useRef();
  //let Password = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useStoreContext();

  const validateUser = async () => {
    if (user != "" && password != "") {
      var response = await API.login(user, password);

      if (response.data.success) {
        login(response.data);
        props.history.push("/appointments");
      } else {
        props.message("error", response.data.message);
      }
      //login(user,password)
    } else {
      props.message("error", "You must enter user and password");
    }
  };

  return (
    <div className="flex-col flex-center">
      <div className="back2 flex-col flex-center p-3">
        <Logo />
        <label>User</label>
        <input
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <label>Password </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="flex-row ">
          <div
            className="button-purple-medium radius1 m-1"
            onClick={validateUser}
          >
            Login{" "}
          </div>
          <div className="button-blue-medium m-1 radius1" onClick={props.open}>
            Sign Up{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LogIn);
