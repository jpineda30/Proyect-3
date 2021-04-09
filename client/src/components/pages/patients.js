import React, { useState, useEffect } from "react";
import Menu from "../general/menu";
import AddBtn from "../general/AddBtn";
import PatientCRUD from "../patients/patientCRUD";
import CreatePatMod from "../patients/createPatMod";
import DeleteMod from "../general/DeleteMod";
import MyModal from "../general/Modal";
import ViewPatMod from "../patients/viewPatMod";
import API from "../../utils/API-";
import Message from "../general/message";

function Patients() {
  const closeModal = () => {
    setCRUDActive(false);
  };

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const [patients, setPatients] = useState([]);
  const [action, setAction] = useState(
    <CreatePatMod close={closeModal}></CreatePatMod>
  );
  const [crudActive, setCRUDActive] = useState(false);

  useEffect(() => {
    loadPatients();
  }, []);

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

  const loadPatients = () => {
    API.getPatients().then((res) => {
      setPatients(res.data);
    });
  };
  const toggleModalCrud = (param, id) => {
    switch (param) {
      case "delete":
        setCRUDActive(!crudActive);
        setAction(
          <DeleteMod
            close={closeModal}
            name={"patient"}
            ide={id}
            reload={loadPatients}
            message={sendMessage}
          ></DeleteMod>
        );
        break;
      case "view":
        setCRUDActive(!crudActive);
        setAction(
          <ViewPatMod close={closeModal} name={"patient"} ide={id}></ViewPatMod>
        );
        break;
      default:
        setCRUDActive(!crudActive);
        setAction(
          <CreatePatMod
            close={closeModal}
            type={param}
            addPatient={addPatient}
            ide={id}
            reload={loadPatients}
            message={sendMessage}
          ></CreatePatMod>
        );
        break;
    }
  };

  return (
    <>
      <Menu />
      <div className="content flex-col flex-center">
        <div className="flex-col crud-body">
          <div className="titles flex-row flex-between flex-acenter">
            <h1>Patients</h1>
            <AddBtn action={toggleModalCrud} />
          </div>
          <PatientCRUD
            status={crudActive}
            toggle={toggleModalCrud}
            patients={patients}
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

export default Patients;
