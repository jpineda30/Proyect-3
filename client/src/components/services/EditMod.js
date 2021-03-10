import React from "react";


function EditMod(props){
   
    return(
      
        
      <div className="flex-col flex-center modal-child">
        <h1>Service Edition</h1>
        <label>name</label>
        <input></input>
        <label>cost</label>
        <input></input>
        <div className="button-small" onClick={props.toggle}>Save</div>
        <div className="button-small" onClick={props.close}>Exit</div>
    </div>
     

    );
}

export default EditMod;