import React from "react";


function CreateMod(props){
   
    return(
      
        
      <div className="flex-col flex-center modal-child">
        <h1>Service Creation</h1>
        <label>name</label>
        <input></input>
        <label>cost</label>
        <input></input>
        <div className="flex-row flex-center">

        <div className="button-small" onClick={props.toggle}>Save</div>
        <div className="button-small" onClick={props.close}>Cancel</div> 

        </div>
    </div>
     

    );
}

export default CreateMod;