import React, { useRef, useState } from "react";


function CreateMod(props){
 const serviceName = useRef();
 const serviceCost = useRef();
 const serviceDescription = useRef();
 

  const saveAppointment =()=>{
      
  }

  //const saveInput = ()=>{}

    return(
      
        
      <div className="flex-col flex-center modal-child">
       
        <div className="flex-row flex-center">

       






        <div className="button-small" onClick={saveAppointment}>Save</div>
        <div className="button-small" onClick={props.close}>Cancel</div> 
 
        </div>
    </div>
     

    );
}

export default CreateMod;