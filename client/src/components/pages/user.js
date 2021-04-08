import React, { useState, useEffect, useRef } from "react";
import Menu from "../general/menu";
import MyModal from "../general/Modal";
import API from "../../utils/API-";
import Message from "../general/message";
import { useStoreContext } from "../../utils/globalState";
import Password from "../login/password";

function User() {
  const { UserId, email } = useStoreContext();
  ////////////////message handling

  let user = useRef();
  let emailInput = useRef();
  let firstName = useRef();
  let lastName = useRef();

  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  //import Message from "../general/message";
  //message={sendMessage}

  const [message, setMessage] = useState(<Message />);
  const [messageState, setMessageStatus] = useState(false);

  const sendMessage = (type, text) => {
    setMessage(
      <Message on={true} type={type} text={text} timer={closeMessage} />
    );
    setMessageStatus(true);
  };

  const closeMessage = () => {
    setMessage(<Message />);
    setMessageStatus(false);
    clearTimeout();
  };
  //////////////////////

  return (
    <>
      <Menu />
      <div className="flex-col flex-center fh">
        <div className="back2 flex-col flex-center p-3">
          <label>User Name</label>
          <input ref={user} type="text" />

          <label>First Name</label>
          <input ref={firstName} type="text" />

          <label>Last Name</label>
          <input ref={lastName} type="text" />

          <label>Email</label>
          <input ref={email} type="text" />

          <div className="flex-row ">
            <div className="button-purple-medium radius1 m-1">
              Save changes{" "}
            </div>
            <div className="button-blue-medium m-1 radius1" onClick={openModal}>
              Change password{" "}
            </div>
          </div>
        </div>

        {message}
        <MyModal
          status={modal}
          close={closeModal}
          type={<Password close={closeModal} />}
        />
      </div>
    </>
  );
}

export default User;
