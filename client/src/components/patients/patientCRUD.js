import React from "react";
import Actions from "../general/crudActions";
import { patients } from "../test json/patients.json";

function PatientCRUD(props) {
  return (
    <div className="is-table radius1">
      <div className="is-row is-header flex-row">
        <div></div>
        <div>Name</div>
        <div>Last Name</div>
        <div>E-mail</div>
        <div>Phone</div>
        <div>Observations</div>
      </div>

      {/* {props.patients.map((patient) */}

      {patients.map((patient) => {
        return (
          <div className="is-row flex-row">
            <div className="first"></div>

            <div>{patient.first_name}</div>

            <div>{patient.last_name}</div>

            <div>{patient.email}</div>

            <div>{patient.phone_number}</div>

            <div>{patient.patient_observations}</div>

            <Actions
              status={props.status}
              toggle={props.toggle}
              ide={patient._id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PatientCRUD;
