import React, { useState, useEffect } from "react";
import Menu from "../general/menu";
import AddBtn from "../general/AddBtn";
import ServiceCRUD from "../services/serviceCRUD";
import CreateMod from "../services/CreateMod";
import DeleteMod from "../general/DeleteMod";
import MyModal from "../general/Modal";
import API from "../../utils/API-";
import Message from "../general/message";

function Services() {
  const closeModal = () => {
    setCRUDActive(false);
  };

  const addService = (service) => {
    setServices([...services, service]);
  };

  const [services, setServices] = useState([]);
  const [action, setAction] = useState(
    <CreateMod close={closeModal}></CreateMod>
  );
  const [crudActive, setCRUDActive] = useState(false);

  useEffect(() => {
    loadServices();
  }, []);

  ////////////////message handling

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

  const loadServices = () => {
    API.getServices().then((res) => {
      setServices(res.data);
    });
  };
  const toggleModalCrud = (param, id) => {
    switch (param) {
      case "delete":
        setCRUDActive(!crudActive);
        setAction(
          <DeleteMod
            close={closeModal}
            name={"service"}
            ide={id}
            reload={loadServices}
            message={sendMessage}
          ></DeleteMod>
        );
        break;
      default:
        setCRUDActive(!crudActive);
        setAction(
          <CreateMod
            close={closeModal}
            type={param}
            addService={addService}
            ide={id}
            reload={loadServices}
            message={sendMessage}
          ></CreateMod>
        );
        break;
    }
  };

  return (
    <>
      <Menu />
      <div className="content flex-col flex-center">
        <div className="flex-col crud-body flex-acenter">
          <div className="titles flex-row flex-between flex-acenter">
            <h1>Services</h1>
            <AddBtn action={toggleModalCrud} />
          </div>
          <ServiceCRUD
            status={crudActive}
            toggle={toggleModalCrud}
            services={services}
          />
          <MyModal
            status={crudActive}
            toggle={toggleModalCrud}
            type={action}
            close={closeModal}
          />
        </div>
      </div>
      {message}
    </>
  );
}

export default Services;
