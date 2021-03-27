import React, { useRef, useState } from "react";
import ServiceList from "./serviceList";
import moment from "moment";

function CreateMod(props) {
  const [service, setService] = useState();
  const [serviceName, setServiceName] = useState();
  const [serviceState, setServiceState] = useState(false);

  const startTime = useRef();
  const endTime = useRef();

  const saveAppointment = () => {
    if (service && startTime.current.value && endTime.current.value) {
      let start = moment(startTime.current.value, "h:mma");
      let end = moment(endTime.current.value, "h:mma");

      if (end.isBefore(start)) {
        alert("start must be before end");
      }
    } else {
      alert("no empty fields");
    }
  };

  const serviceListOff = () => {
    setServiceState(false);
  };
  const serviceListOn = () => {
    setServiceState(true);
  };

  //const saveInput = ()=>{}

  return (
    <div className="modal-child flex-col">
      <h1 className="size4">Appointment {props.name}</h1>

      <div className="flex-row my-1 flex-wrap">
        <div flex-col p-1>
          <label>Start Time</label>
          <input type="time" min="09:00" max="18:00" ref={startTime} required />
        </div>

        <div flex-col p-1>
          <label>End Time</label>
          <input type="time" min="09:00" max="18:00" ref={endTime} required />
        </div>
      </div>

      <label>Patient Name</label>
      <input type="text" />
      <label>Service Name</label>
      <ServiceList
        visible={serviceState}
        off={serviceListOff}
        set={setService}
        setName={setServiceName}
        services={props.services}
      />
      <input onClick={serviceListOn} value={serviceName} type="text" />

      <div className="flex-row flex-center">
        <div className="button-small" onClick={saveAppointment}>
          Save
        </div>
        <div className="button-small" onClick={props.close}>
          Cancel
        </div>
      </div>
    </div>
  );
}

export default CreateMod;
