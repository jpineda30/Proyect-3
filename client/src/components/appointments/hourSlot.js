import React from "react";

function HourSlot(props) {
  function onEdit() {
    let pack = {
      day: props.date,
      _id: props._id,
      start: props.start,
      end: props.end,
      service: props.service,
      patient: props.patient,
      serviceId: props.serviceId,
      patientId: props.patientId,
    };
    props.open("edit", pack);
  }

  function onDelete() {
    props.open("delete", props.appointmentId);
  }

  return (
    <div className="flex-row flex-between back2 m-1 hour-slot">
      <div onClick={onEdit}>
        <i className="far fa-edit fa-2x sleft"></i>
      </div>

      <div className="flex-row  flex-center ">
        <div className="flex-col flex-center p-1">
          <p className="m-0 mobil-text">
            From: {props.start ? props.start : ""}
          </p>
          <p className="m-0 mobil-text">To: {props.end ? props.end : ""}</p>
        </div>

        <div className="flex-col ">
          <div className="flex-row my-1">
            <i className="fas fa-user left-blue"></i>
            <p className="right-white  mobil-text">
              {"Patient: " + props.patient ? props.patient : ""}
            </p>
          </div>

          <div className="flex-row ">
            <i className="fas fa-briefcase-medical left-purple" />
            <p className="right-white  mobil-text">
              {"Service: " + props.service ? props.service : ""}
            </p>
          </div>
        </div>
      </div>

      <div onClick={onDelete}>
        <i className="fas fa-trash-alt fa-2x sright"></i>
      </div>
    </div>
  );
}

export default HourSlot;
