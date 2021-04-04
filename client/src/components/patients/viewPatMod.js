import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function ViewPatMod(props) {
  console.log("estamos tratando de ver" + props);
  console.log(props);
  // VIEW PATIENTS BI ID
  /*   getById(); */

  /*  props.patients.map((patient) => { */
  return (
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
          <p>{props.ide.object.first_name}</p>
        </div>

        <div className="flex-col ">
          <label className="">Patient Last Name</label>
          <p>{props.ide.object.last_name}</p>
        </div>

        <div className="flex-col ">
          <label className="">Email</label>
          <p>{props.ide.object.email}</p>
        </div>

        <div className="flex-col  ">
          <label className="">Phone Number</label>
          <p>{props.ide.object.phone_number}</p>
        </div>

        <div className="flex-col my-1 ">
          <label className="">Age</label>
          <p>{props.ide.object.age}</p>
        </div>

        <div className="flex-col ">
          <label className="">Sex</label>
          <p>{props.ide.object.sex}</p>
        </div>

        <div className="flex-col ">
          <label className="">Current Diseases</label>
          <p>{props.ide.object.chart}</p>
        </div>

        <div className="flex-col ">
          <label className="">Current Medication</label>
          <p>{props.ide.object.medication}</p>
        </div>

        <div className="flex-col ">
          <label className="">Allergies</label>
          <p>{props.ide.object.allergies}</p>
        </div>

        <div className="flex-col ">
          <label className="">Observations</label>
          <p>{props.ide.object.observations}</p>
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

export default ViewPatMod;
