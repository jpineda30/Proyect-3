import React from "react";
import AddBtn from "../AddBtn";
import AppointmentCRUD from "../appointmentCRUD";

function Appointments(){


    return(

        
        <div className="content flex-col">
        
        <div className="flex-col flex-center">
        <h1>Appointments</h1>
        <AddBtn/>
        <AppointmentCRUD/>
    
    </div>   
    
</div>    



    );
}

export default Appointments;