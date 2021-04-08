import React, { useContext, useState, useEffect } from "react";
import LogIn from "../login/login";
import SignUp from "../login/signup";
import MyModal from "../general/Modal";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import { useStoreContext } from "../../utils/globalState";
import Message from "../general/message";

function Home(props) {
  const { login, isLogged } = useStoreContext();
  const [isActive, setActive] = useState(false);
  const [message, setMessage] = useState(<Message />);
  const [messageState, setMessageStatus] = useState(false);

  const closeModal = () => {
    setActive(false);
    // setState({
    //     ...state,
    //     isActive:true
    // });
    // console.log(state.isActive);
  };

  const [action, setAction] = useState(<SignUp close={closeModal} />);
  // const [state,setState]= useState(
  //         {

  //             isActive:false,
  //             type: <SignUp close={closeModal} history={props.history}/>,

  //         }
  //     );

  const openModal = () => {
    setActive(true);
    setAction(<SignUp close={closeModal} />);
    // setState({
    //     ...state,
    //     isActive:true,
    //     type:<SignUp close={closeModal}/>
    // });
    // console.log(state.isActive);
  };

  const logout = () => {
    isLogged(false);
    // setState({
    //     ...state,
    //     isLogged:false
    // })
    props.history.push("/");
  };

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

  const sendSignup = () => {
    return (
      <SignUp
        close={closeModal}
        history={props.history}
        message={sendMessage}
      />
    );
  };

  return (
    <div className="flex-col flex-center fh">
      <LogIn
        open={openModal}
        close={closeModal}
        login={login}
        logout={logout}
        message={sendMessage}
        history={props.history}
      />
      <MyModal
        message={sendMessage}
        status={isActive}
        toggle={closeModal}
        type={sendSignup()}
      />
      {message}
    </div>
  );
}

export default withRouter(Home);
