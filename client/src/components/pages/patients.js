import React from "react";
import AddBtn from "../general/AddBtn";
import PatientCRUD from "../patients/patientCRUD";
import Menu from "../general/menu"

function Patients(){


    return(
        < >
        <Menu/>

        <div className="content flex-col">
        
        <div className="flex-col flex-center">
        <h1>Patients</h1>
        <AddBtn/>
        <PatientCRUD/>
    
    </div>   
    
</div>    
</>


    );
}

export default Patients;