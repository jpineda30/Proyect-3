import React, { useRef } from "react";
import API from "../../utils/API-";

function UserUpdate(props) {
  let user = useRef();
  let email = useRef();
  let firstName = useRef();
  let lastName = useRef();
  let pass1 = useRef();
  let pass2 = useRef();

  const SignUp = () => {
    let data = {
      user: user.current.value,
      email: email.current.value,
      pass1: pass1.current.value,
      pass2: pass2.current.value,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
    };

    if (
      data.user != "" &&
      data.email != "" &&
      data.firstName != "" &&
      data.lastName != "" &&
      data.pass1 != "" &&
      data.pass2 != ""
    ) {
      if (data.pass1 === data.pass2) {
        API.createUser(data.user, data.pass1, data.email)
          .then((response) => {
            props.message("success", "User created");
            props.close();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        props.message("error", "Password does not match");
      }
    } else {
      props.message("error", "You must enter all the fields");
    }
  };

  return (
    <div className="modal-child flex-col flex-center p-3">
      <label>User Name</label>
      <input ref={user} type="text" />

      <label>First Name</label>
      <input ref={firstName} type="text" />

      <label>Last Name</label>
      <input ref={lastName} type="text" />

      <label>Email</label>
      <input ref={email} type="text" />

      <label>Password </label>
      <input ref={pass1} type="password" />

      <label>Repeat Password </label>
      <input ref={pass2} type="password" />

      <div className="flex-row ">
        <div className="button-purple-medium radius1 m-1" onClick={SignUp}>
          SignUp{" "}
        </div>
        <div className="button-blue-medium m-1 radius1" onClick={props.close}>
          Cancel{" "}
        </div>
      </div>
    </div>
  );
}

export default UserUpdate;
