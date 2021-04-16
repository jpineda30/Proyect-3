import React from "react";
import Actions from "../general/crudActions";

function PatientCRUD(props) {
  console.log(props.patients);
  return (
    <div>
      <div className="is-table radius1">
        <div className="is-row is-header flex-row">
          <div className="space"></div>
          <div className="mobil-off">Name</div>
          <div className="mobil-off">Last Name</div>
          <div className="mobil-off">E-mail</div>
          <div className="mobil-off phone">Phone</div>
          <div className="mobil-off observations">Observations</div>
        </div>

        {props.patients.map((patient) => {
          return (
            <div>
              <div className="is-row flex-row">
                <div className="first"></div>

                <div className="is-row-child">{patient.first_name}</div>

                <div className="is-row-child">{patient.last_name}</div>

                <div className="mobil-off">{patient.email}</div>

                <div className="mobil-off phone">{patient.phone_number}</div>

                <div className="hoverDetails mobil-off observations">
                  {patient.observations}
                </div>

                <Actions
                  status={props.status}
                  toggle={props.toggle}
                  ide={patient._id}
                  object={patient}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PatientCRUD;
