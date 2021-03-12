import React from "react";


function EditMod(props){
   
    return(
      
        
      <div className="flex-col flex-center modal-child">
        
        <div className="flex-row flex-center">

          <div className="button-small">Save</div>
          <div className="button-small" onClick={props.close}>Cancel</div> 

          </div>
    </div>
     

    );
}

export default EditMod;