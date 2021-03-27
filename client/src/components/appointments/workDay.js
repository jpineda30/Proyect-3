import React from "react";
import Slot from "./hourSlot";
import AddBtn2 from "../general/AddBtn2";

function WorkDay(props) {
  //get props.date and find in data base
  //get appointments
  //if doesnt exist create date in bd
  return (
    <div>
      <div className="flex-col back2 work-day">
        <div className="top-green flex-row flex-acenter flex-between">
          <p className="mini"></p>
          <p>{props.date ? props.date : "00/00/0000"}</p>
          <AddBtn2 open={props.open} />
        </div>
        <div className="flex-col p-1">
          <Slot open={props.open} close={props.close} />
          <Slot open={props.open} close={props.close} />
        </div>
      </div>
    </div>
  );
}

export default WorkDay;
