import React from "react";
import Pdf from "react-to-pdf";

/* import { patients } from "../test json/patients.json"; */
const ref = React.createRef();

function ViewPatMod(props) {
  /*     console.log({patients});

  // VIEW PATIENTS BI ID

  getById()
 
  {patients.map((patient)=>{
      */
  return (
    /* <Onclick={patient_id}/> */

    <div className="flex-col flex-left modal-child-scroll">
      <div>
        <Pdf targetRef={ref} filename="Patient_Chart.pdf">
          {({ toPdf }) => (
            <button
              className="button-blue flex-row flex-around flex-center"
              onClick={toPdf}
            >
              <i className="fas fa-file-pdf"></i>
              <p className="has-text-white">Generate PDF</p>
            </button>
          )}
        </Pdf>
      </div>

      <div ref={ref}>
        <h1>Patient {props.type}</h1>
        <div className="flex-col ">
          <label className="">Patient Name</label>
          <p>test</p>
        </div>

        <div className="flex-col ">
          <label className="">Patient Last Name</label>
          <p>{/* {patient.last_name} */}test</p>
        </div>

        <div className="flex-col ">
          <label className="">email</label>
          <p>{/* {patient.email} */}test</p>
        </div>

        <div className="flex-col  ">
          <label className="">Phone Number</label>
          <p>{/* patient.phone_number */}test</p>
        </div>

        <div className="flex-col my-1 ">
          <label className="">Age</label>
          <p>{/* patient.age */}test</p>
        </div>

        <div className="flex-col ">
          <label className="">Sex</label>
          <p>{/* patient.sex */}test</p>
        </div>

        <div className="flex-col ">
          <label className="">Current Diseases</label>
          <p>{/* patient.chart */}test</p>
        </div>

        <div className="flex-col ">
          <label className="">Current Medication</label>
          <p>{/* patient.medication */}</p>
        </div>

        <div className="flex-col ">
          <label className="">Allergies</label>
          <p>{/* patient.allergies */}</p>
        </div>

        <div className="flex-col ">
          <label className="">Observations</label>
          <p>{/* patient.observations */}</p>
        </div>
      </div>

      <div className="flex-row flex-center">
        <div className="button-blue" onClick={props.close}>
          Cancel
        </div>
      </div>
    </div>
  );
}
/* )} */

export default ViewPatMod;
