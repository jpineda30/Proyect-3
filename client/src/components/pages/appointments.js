import React from "react";
import AddBtn from "../general/AddBtn";
import AppointmentCRUD from "../appointments/appointmentCRUD";
import WorkDay from "../appointments/workDay";
import Calendar from 'react-calendar'

function Appointments(){


    return(

        
        <div className="flex-col scroll">
        
            <div className="flex-col flex-center">

                <h1>Appointments</h1>
                
                <div className="flex-row flex-wrap flex-jcenter">
                    
                    <WorkDay></WorkDay>
                    <div className="calendar p-1 flex-col">   <Calendar /></div>   
                </div>   
            
            </div>   
            
        </div>    



    );
}

export default Appointments;