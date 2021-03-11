import React from "react";
import AddBtn from "../general/AddBtn";
import AppointmentCRUD from "../appointments/appointmentCRUD";
import WorkDay from "../appointments/workDay";

function Appointments(){


    return(

        
        <div className="flex-col scroll">
        
            <div className="flex-col flex-center">

                <h1>Appointments</h1>
                
                <div className="flex-row flex-around fw">
                    <img src="img/calendar.png"/>
                    <WorkDay></WorkDay>
                </div>   
            
            </div>   
            
        </div>    



    );
}

export default Appointments;