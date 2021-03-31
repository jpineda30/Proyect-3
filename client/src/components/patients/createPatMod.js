import React, { useEffect, useRef } from "react";
import API from "../../utils/API-";
/* import ViewPatMod from "./viewPatMod"; */

function CreatePatMod(props) {
  const patientName = useRef();
  const patientLastName = useRef();
  const patientEmail = useRef();
  const patientPhone = useRef();
  const patientSex = useRef();
  const patientAge = useRef();
  const patientChart = useRef();
  const patientMedication = useRef();
  const patientAllergies = useRef();
  const patientObservations = useRef();

  var visibility = "visible";
  var edition = false;

  if (props.type == "view") {
    visibility = "hidden";
    edition = true;
  }

  useEffect(() => {
    console.log("patients = " + props);
    if (props.type == "edit" || props.type == "view") {
      getById();
    }
  }, []);

  const getById = () => {
    patientName.current.value = props.ide.object.first_name;
    patientLastName.current.value = props.ide.object.last_name;
    patientEmail.current.value = props.ide.object.email;
    patientPhone.current.value = props.ide.object.phone_number;
    patientSex.current.value = props.ide.object.sex;
    patientAge.current.value = props.ide.object.age;
    patientChart.current.value = props.ide.object.chart;
    patientMedication.current.value = props.ide.object.medication;
    patientAllergies.current.value = props.ide.object.allergies;
    patientObservations.current.value = props.ide.object.observations;
  };

  const savePatient = () => {
    let patient = {
      _id: props.ide ? props.ide.object._id : "",
      first_name: patientName.current.value,
      last_name: patientLastName.current.value,
      email: patientEmail.current.value,
      phone_number: patientPhone.current.value,
      sex: patientSex.current.value,
      age: patientAge.current.value,
      chart: patientChart.current.value,
      medication: patientMedication.current.value,
      allergies: patientAllergies.current.value,
      observations: patientObservations.current.value,
    };

    if (
      patient.first_name != "" &&
      patient.last_name != "" &&
      patient.phone_number != ""
    ) {
      if (props.type == "create") {
        API.createPatient(patient).then((patient) => {
          props.addPatient(patient.data);
        });
        props.close();
      } else if (props.type == "update") {
        //update patient
      } else if (props.type == "edit") {
        API.updatePatient(patient).then((response) => {
          console.log("you are editing a Patient " + response);
          props.reload();
          props.close();
        });
      } else {
        /* return ViewPatMod;  */
        //Patients Chart view
      }
    } else {
      alert("you can´t leave empty inputs");
    }
  };

  return (
    <div className="flex-col flex-left modal-child-scroll">
      <h1>Patient {props.type}</h1>
      <div className="flex-col ">
        <label className="">Patient Name</label>
        <input
          type="text"
          ref={patientName}
          placeholder="Patient name"
          disabled={edition}
        />
      </div>

      <div className="flex-col ">
        <label className="">Patient Last Name</label>
        <input
          type="text"
          ref={patientLastName}
          placeholder="Patient last name"
          disabled={edition}
        />
      </div>

      <div className="flex-col ">
        <label className="">email</label>
        <input
          type="email"
          ref={patientEmail}
          placeholder="my.e.mail@mail.com"
          disabled={edition}
        />
      </div>

      <div className="flex-col  ">
        <label className="">Phone Number</label>
        <input
          type="number"
          ref={patientPhone}
          placeholder="5555555555"
          disabled={edition}
        />
      </div>

      <div className="flex-col my-1 ">
        <label className="">Age</label>
        <input
          type="number"
          ref={patientAge}
          placeholder="09"
          disabled={edition}
        />
      </div>

      <div className="flex-col ">
        <label className="">Sex</label>
        <input type="text" ref={patientSex} placeholder="" disabled={edition} />
      </div>

      <div className="flex-col ">
        <label className="">Current Diseases</label>
        <input
          className="height50"
          type="text"
          ref={patientChart}
          disabled={edition}
        />
      </div>

      <div className="flex-col ">
        <label className="">Current Medication</label>
        <input
          className="height50"
          type="text"
          ref={patientMedication}
          disabled={edition}
        />
      </div>

      <div className="flex-col ">
        <label className="">Allergies</label>
        <input
          className="height50"
          type="text"
          ref={patientAllergies}
          disabled={edition}
        />
      </div>

      <div className="flex-col ">
        <label className="">Observations</label>
        <input
          className="height50"
          type="text"
          ref={patientObservations}
          disabled={edition}
        />
      </div>

      <div className="flex-row flex-center">
        <div className={visibility + " button-small"} onClick={savePatient}>
          Save
        </div>
        <div className="button-small" onClick={props.close}>
          Cancel
        </div>
      </div>
    </div>
  );
}

export default CreatePatMod;
