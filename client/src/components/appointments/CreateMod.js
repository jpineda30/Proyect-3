import React, { useRef, useState } from "react";


function CreateMod(props){
 
 

  const saveAppointment =()=>{
      
  }

  //const saveInput = ()=>{}

    return(

      <div className="modal-child flex-col">
        <h1 className="size4">Appointment {props.name}</h1>

        <div className="flex-row my-1 flex-wrap">
            <div flex-col p-1>
              <label >Start Time</label>
              <input type="time"
                  min="09:00" max="18:00" required/>
              
            </div>

            <div flex-col p-1>
              <label >End Time</label>
              <input type="time"
                  min="09:00" max="18:00" required/>
              
            </div>


          </div>

          <label >Patient Name</label>
              <input type="text"/>
              <label >Service Name</label>
              <input type="text"/>

              <div className="flex-row flex-center">

                  <div className="button-small" onClick={saveAppointment}>Save</div>
                  <div className="button-small" onClick={props.close}>Cancel</div> 

              </div>

      </div>
      
        
     

       

   

      
     

    );
}

export default CreateMod;