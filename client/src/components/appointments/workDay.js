import React, { useState, useEffect } from "react";
import Slot from "./hourSlot";
import AddBtn2 from "../general/AddBtn2";
import API from "../../utils/API-";
import moment from "moment";

function WorkDay(props) {
	const [appointments, setAppointments] = useState([]);

	// console.log(props.date);

	useEffect(() => {
		//get props.date and find in data base
		/* API.getAppByID().then((result) => {
      setAppointments(result);
    });*/
		// if (props.date !== null) {
		//   let formatCalendarDate = moment.utc(props.date).format("L");
		//   //console.log(formatCalendarDate);
		//   let body = {
		//     day: formatCalendarDate,
		//   };
		//   API.getAppointmentsByDate(body).then((res) => {
		//     //	console.log("INSIDE APPOINTMENTSBYDATE");
		//     // console.log(res);
		//     setAppointments(res.data);
		//   });
		// }
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
					{props.slots
						? props.slots.map((appointment) => {
								return (
									<Slot
										open={props.open}
										close={props.close}
										patient={
											appointment.patient.first_name +
											" " +
											appointment.patient.last_name
										}
										service={appointment.service[0].name}
										start={appointment.startT}
										end={appointment.endT}
									/>
								);
						  })
						: null}
					{/* <Slot
						open={props.open}
						close={props.close}
						patient={"Marcela Dupeyron"}
						service={"Head amputation"}
						start={"10:00 AM"}
						end={"11:00 AM"}
					/> */}
				</div>
			</div>
		</div>
	);
}

export default WorkDay;
