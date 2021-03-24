import React, {useRef } from "react";
import API from "../../utils/API";

function CreateMod(props){

  const serviceName = useRef();
  const serviceCost = useRef();
  const serviceDescription = useRef();
  var visibility = "visible"
  var edition = false;

  if(props.type == "view")
  {visibility = "hidden"; edition=true}
 

  const saveService = ()=>{

    
    let service = {
      name:serviceName.current.value,
      price:parseInt(serviceCost.current.value),
      details:serviceDescription.current.value
    }

    if(service.name != "" && service.cost != "")
    {
      console.log(service);

      if(props.type == "create")
      {
        API.createService(service).then(service=>{
          props.addService(service.data);
        })
        props.close();
      }
      else if (props.type == "update") 
      {
        //update service
      }
      else{
        //view
        
      }
    }
    else{
      alert("Empty inputs lazy ass");
    }

    

  }

    return(
      
      
        
      <div className="flex-col flex-center modal-child">
        <h1>Service {props.type}</h1>
        <div className="flex-col ">
          <label className="">Service Name</label>
          <input type="text" ref={serviceName} placeholder="Service name" disabled={edition}/>

        </div>

        <div className="flex-col my-1 ">
          <label className="">Service Cost</label>
          <input type="number" ref={serviceCost} placeholder="$1" disabled={edition}/>

        </div>

        <div className="flex-col ">
          <label className="">Service Description</label>
          <input className="height50" type="text" ref={serviceDescription} disabled={edition}/>

        </div>
        
        <div className="flex-row flex-center">

        <div className={visibility + " button-small"} onClick={saveService}>Save</div>
        <div className="button-small" onClick={props.close}>Cancel</div> 

        </div>
    </div>
     

    );
}

export default CreateMod;