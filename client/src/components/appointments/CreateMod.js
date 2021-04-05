import React, { useRef, useState, useEffect } from "react";
import ServiceList from "./serviceList";
import PatientList from "./patientList";
import moment from "moment";
import API from "../../utils/API-";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/* import { useStoreContext } from "../../utils/globalState"; */

function CreateMod(props) {
  // date

  const [startDate, setStartDate] = useState(props.day);

  let id = "";

  if (props.info) {
    id = props.info._id;
  }

  var visible = "hidden";

  if (props.name == "edition") {
    visible = "visible";
  }

  let formatCalendarDate = moment(props.day).format("L");

  //ids

  const [service, setService] = useState();
  const [patient, setPatient] = useState();

  //dropdowns
  const [serviceState, setServiceState] = useState(false);
  const [patientState, setPatientState] = useState(false);

  //get list
  const [services, setServices] = useState({});
  const [servicesTemp, setServicesTemp] = useState({});
  const [patients, setPatients] = useState({});
  const [patientsTemp, setPatientsTemp] = useState({});

  //time

  const startTime = useRef();
  const endTime = useRef();
  const serviceInput = useRef();
  const patientInput = useRef();

  useEffect(() => {
    API.getServices().then((res) => {
      setServices(res.data);
      setServicesTemp(res.data);
    });

    API.getPatients().then((res) => {
      setPatients(res.data);
      setPatientsTemp(res.data);
    });

    if (props.name == "edition") {
      startTime.current.value = props.info.start;
      endTime.current.value = props.info.end;
      serviceInput.current.value = props.info.service;
      patientInput.current.value = props.info.patient;
      setService(props.info.serviceId);
      setPatient(props.info.patientId);

      //console.log(moment(props.day).format("DD MM YYYY").replaceAll(" ", "/"));
    } //
  }, []);

  const saveAppointment = () => {
    if (
      patient &&
      service &&
      startTime.current.value &&
      endTime.current.value
    ) {
      let start = moment(startTime.current.value, "h:mma");
      let end = moment(endTime.current.value, "h:mma");

      if (end.isBefore(start)) {
        props.message(
          "error",
          "The end time must be greater than the start time"
        );
      } else {
        let pack = {
          _id: id,
          day: moment(startDate).format("L"),
          patient: patient,
          service: service,
          start: startTime.current.value,
          end: endTime.current.value,
        };
        console.log(pack);
        if (props.name == "creation") {
          API.createAppointment(pack);
          props.reload();
          props.message("success", "Appointment saved");
          props.close();
        } else if (props.name == "edition") {
          API.updateAppointment(pack);
          props.reload();
          props.message("success", "Appointment saved");
          props.close();
        }
      }
    } else {
      props.message("error", "All the fields must be filled");
    }
  };

  const serviceListOff = () => {
    setServiceState(false);
  };
  const serviceListOn = () => {
    setServiceState(true);
  };

  const patientListOff = () => {
    setPatientState(false);
  };
  const patientListOn = () => {
    setPatientState(true);
  };

  const serviceHandler = () => {
    let value = serviceInput.current.value;
    console.log(value);
    if (value != "") handleServiceChange(value);
  };

  const handleServiceChange = (value) => {
    var result = services.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    setServicesTemp(result);
  };

  const patientHandler = () => {
    let value = patientInput.current.value;

    if (value != "") handlePatientChange(value);
  };

  const handlePatientChange = (value) => {
    var result = patients.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    setPatientsTemp(result);
  };

  const setServiceName = (val) => {
    serviceInput.current.value = val;
  };

  const setPatientName = (val) => {
    patientInput.current.value = val;
  };

  //const saveInput = ()=>{}

  return (
    <div className="modal-child flex-col">
      <div className="flex-row flex-between flex-acenter fw">
        <h1 className="size4">Appointment {props.name}</h1>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

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
      <input
        ref={patientInput}
        type="text"
        onClick={patientListOn}
        onChange={patientHandler}
      />
      <PatientList
        visible={patientState}
        off={patientListOff}
        set={setPatient}
        setName={setPatientName}
        patients={patientsTemp}
      />
      <label>Service Name</label>

      <input
        onClick={serviceListOn}
        onChange={serviceHandler}
        ref={serviceInput}
        type="text"
      />

      <ServiceList
        visible={serviceState}
        off={serviceListOff}
        set={setService}
        setName={setServiceName}
        services={servicesTemp}
      />

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
