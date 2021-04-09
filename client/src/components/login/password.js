import React, { useRef } from "react";

function Password(props) {
  let currPass = useRef();
  let pass1 = useRef();
  let pass2 = useRef();

  return (
    <div className="modal-child flex-col flex-center p-3">
      <label>Current Password </label>
      <input ref={currPass} type="password" />

      <label>New Password </label>
      <input ref={pass1} type="password" />

      <label>Repeat Password </label>
      <input ref={pass2} type="password" />

      <div className="flex-row ">
        <div className="button-purple-medium radius1 m-1">Save </div>
        <div className="button-blue-medium m-1 radius1" onClick={props.close}>
          Cancel{" "}
        </div>
      </div>
    </div>
  );
}

export default Password;
