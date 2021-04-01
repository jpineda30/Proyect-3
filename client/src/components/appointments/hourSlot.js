import React from "react";

function HourSlot(props) {
  function onEdit() {
    props.open("edit");
  }

  function onDelete() {
    props.open("delete");
  }

  return (
    <div className="flex-row flex-beteween back2 m-1">
      <div onClick={onEdit}>
        <i className="far fa-edit fa-2x sleft"></i>
      </div>

      <div className="flex-row  flex-center p-1">
        <div className="flex-col flex-center p-1">
          <p className="m-0">From: {props.start ? props.start : ""}</p>
          <p className="m-0">To: {props.end ? props.end : ""}</p>
        </div>

        <div className="flex-col ">
          <div className="flex-row my-1">
            <i className="fas fa-user left-blue"></i>
            <p className="right-white">
              {"Patient: " + props.patient ? props.patient : ""}
            </p>
          </div>

          <div className="flex-row ">
            <i className="fas fa-briefcase-medical left-purple" />
            <p className="right-white">
              {"Service: " + props.service ? props.service : ""}
            </p>
          </div>
        </div>
      </div>

      <div className="fh" onClick={onDelete}>
        <i className="fas fa-trash-alt fa-2x sright"></i>
      </div>
    </div>
  );
}

export default HourSlot;
