import React, { useState, useEffect } from "react";
import Slot from "./hourSlot";
import AddBtn2 from "../general/AddBtn2";
import API from "../../utils/API-";

function WorkDay(props) {
  const [appointments, setAppointments] = useState();

  useEffect(() => {
    //get props.date and find in data base
    /* API.getAppByID().then((result) => {
      setAppointments(result);
    });*/
  }, []);

  return (
    <div>
      <div className="flex-col back2 work-day">
        <div className="top-green flex-row flex-acenter flex-between">
          <p className="mini"></p>
          <p>{props.date ? props.date : "00/00/0000"}</p>
          <AddBtn2 open={props.open} date={props.date} />
        </div>
        <div className="flex-col p-1 dates-scroll">
          <Slot
            open={props.open}
            close={props.close}
            patient={"Marcela Dupeyron"}
            service={"Head amputation"}
            start={"10:00 AM"}
            end={"11:00 AM"}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkDay;
