import React from "react";
import Pdf from "react-to-pdf";
import Logo from "../general/logo";

const ref = React.createRef();

function ViewPatMod(props) {
  console.log("Patient: " + props);
  console.log(props);
  // VIEW PATIENTS BI ID
  /*   getById(); */

  /*  props.patients.map((patient) => { */
  return (
    <div className="flex-col flex-left modalChart-child-scroll">
      <div className="flex-row marginTop">
        <Pdf targetRef={ref} filename="Patient_Chart.pdf">
          {({ toPdf }) => (
            <button
              className="buttonPDF-blue-medium flex-row flex-around flex-center"
              onClick={toPdf}
            >
              <i className="fas fa-file-pdf"></i>
              <p className="text-is-white">Generate PDF</p>
            </button>
          )}
        </Pdf>
      </div>

      <div ref={ref} className="">
        <div className="containt flex-right">
          <Logo />
        </div>

        <h1 className="is-header-Patient">
          {" "}
          {props.ide.object.first_name + " " + props.ide.object.last_name}
          {props.type}
        </h1>
        <div className="flex-col">
          <div className="containt flex-row flex-inline flex-between">
            <div className="flex-col">
              <p>
                <strong>Sex: </strong>

                <i className="patient-info"> {props.ide.object.sex}</i>
              </p>
            </div>
            <div className="flex-col">
              <p>
                <strong>Age: </strong>

                <i className="patient-info">{props.ide.object.age}</i>
              </p>
            </div>
            <div className="flex-col">
              <p>
                <strong>Email: </strong>
                <i className="patient-info">{props.ide.object.email}</i>
              </p>
            </div>
            <div className="flex-col">
              <p>
                <strong>Phone: </strong>

                <i className="patient-info">{props.ide.object.phone_number}</i>
              </p>
            </div>
          </div>

          <div className="flex-row flex-evenly"></div>

          <h3 className="is-header-Chart">Patient Medical Record</h3>

          <div className="flex-col">
            <div className="flex-row">
              <p>
                <strong>Current Diseases: </strong>

                <i className="patient-info">{props.ide.object.chart}</i>
              </p>
            </div>
            <div className="flex-row">
              <p>
                {" "}
                <strong>Current Medication: </strong>
                <i className="patient-info">{props.ide.object.medication}</i>
              </p>
            </div>

            <div className="flex-row">
              <p>
                <strong>Allergies: </strong>

                <i className="patient-info">{props.ide.object.allergies}</i>
              </p>
            </div>

            <div className="flex-row">
              <p>
                <strong>Observations: </strong>
                <i className="patient-info">{props.ide.object.observations}</i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row flex-center marginTop">
        <button
          className="buttonPDF-blue-medium flex-row flex-around flex-center"
          onClick={props.close}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ViewPatMod;
