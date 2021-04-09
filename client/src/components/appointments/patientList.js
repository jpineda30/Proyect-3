import React from "react";

function PatientList(props) {
  const setPatient = (e) => {
    props.set(e.target.id);
    props.setName(e.target.innerHTML);
    props.off();
  };

  return props.visible ? (
    <div className="floating-list-wraper">
      <div className="flex-col floating-list violet">
        {props.patients.map((patient) => {
          let pat = (
            <p onClick={setPatient} id={patient._id}>
              {patient.first_name + " " + patient.last_name}
            </p>
          );
          return pat;
        })}
      </div>
    </div>
  ) : null;
}

export default PatientList;
