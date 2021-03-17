import React, { useRef } from "react";
import ViewPatMod from "./viewPatMod"



function CreatePatMod(props){

  const patientName = useRef();
  const patientLastName = useRef();
  const patientEmail = useRef();
  const patientPhone= useRef();
  const patientSex= useRef();
  const patientAge = useRef();
  const patientChart= useRef();
  const patientMedication= useRef();
  const patientAllergies= useRef();
  const patientObservations= useRef();


  var visibility = "visible"
  var edition = false;

  if(props.type == "view")
  {visibility = "hidden"; edition=true}
 

  const savePatient = ()=>{

    
    let patient = {
      name:patientName.current.value,
      last_name:patientLastName.current.value,
      email:patientEmail.current.value,
      phone_number: patientPhone.current.value,
      sex: patientSex.current.value,
      age: patientAge.current.value,
      chart: patientChart.current.value,
      current_medication: patientMedication.current.value,
      allergies: patientAllergies.current.value,
      patient_observations: patientObservations.current.value
    }

    if(patient.name != "" && patient.last_name != "")
    {
      console.log(patient);

      if(props.type == "create")
      {/*save new*/}
      else if (props.type == "update") 
      {
        //update patient
      }
      else
      {
        //view
      }
    }
    else{
      alert("You need to input something!!!");
    }

    

  }

    return(
      
      
        
      <div className="flex-col flex-left modal-child-scroll">
        <h1>Patient {props.type}</h1>
        <div className="flex-col ">
          <label className="">Patient Name</label>
          <input type="text" ref={patientName} placeholder="Patient name" disabled={edition}/>
        </div>

        <div className="flex-col ">
          <label className="">Patient Last Name</label>
          <input type="text" ref={patientLastName} placeholder="Patient last name" disabled={edition}/>
        </div>


        <div className="flex-col ">
          <label className="">email</label>
          <input type="email" ref={patientEmail} placeholder="my.e.mail@mail.com" disabled={edition}/>
        </div>


        <div className="flex-col  ">
          <label className="">Phone Number</label>
          <input type="number" ref={patientPhone} placeholder="5555555555" disabled={edition}/>
        </div>


        <div className="flex-col my-1 ">
          <label className="">Age</label>
          <input type="number" ref={patientAge} placeholder="09" disabled={edition}/>
        </div>


        <div className="flex-col ">
          <label className="">Sex</label>
          <input type="text" ref={patientSex} placeholder="" disabled={edition}/>
        </div>

        <div className="flex-col ">
          <label className="">Current Diseases</label>
          <input className="height50" type="text" ref={patientChart} disabled={edition}/>
        </div>

        <div className="flex-col ">
          <label className="">Current Medication</label>
          <input className="height50" type="text" ref={patientMedication} disabled={edition}/>
        </div>

        <div className="flex-col ">
          <label className="">Allergies</label>
          <input className="height50" type="text" ref={patientAllergies} disabled={edition}/>
        </div>


        <div className="flex-col ">
          <label className="">Observations</label>
          <input className="height50" type="text" ref={patientObservations} disabled={edition}/>
        </div>




        
        <div className="flex-row flex-center">

        <div className={visibility + " button-small"} onClick={savePatient}>Save</div>
        <div className="button-small" onClick={props.close}>Cancel</div> 

        </div>
    </div>
     

    );
}

export default CreatePatMod;