import React, { useState } from "react";
import Slot from "./hourSlot";
import AddBtn2 from "../general/AddBtn2";

function WorkDay(props) {
  const [appointments, setAppointments] = useState([]);
  console.log(props);

  return (
    <div>
      <div className="flex-col back2 work-day">
        <div className="top-green flex-row flex-acenter flex-between">
          <p className="mini"></p>
          <p>{props.date ? props.date : "00/00/0000"}</p>
          <AddBtn2 open={props.open} date={props.date} />
        </div>
        <div className="flex-col p-1 dates-scroll">
          {props.slots
            ? props.slots.map((appointment) => {
                return (
                  <Slot
                    appointmentId={appointment._id}
                    open={props.open}
                    close={props.close}
                    patient={
                      appointment.patient
                        ? appointment.patient.first_name +
                          " " +
                          appointment.patient.last_name
                        : ""
                    }
                    service={appointment.service[0].name}
                    start={appointment.startT}
                    end={appointment.endT}
                    message={props.message}
                    _id={appointment._id}
                    date={props.date}
                    patientId={
                      appointment.patient ? appointment.patient._id : ""
                    }
                    serviceId={
                      appointment.service ? appointment.service._id : ""
                    }
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default WorkDay;
