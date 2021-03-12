import React from "react";


function ViewMod(props){
   
    return(
      
        
      <div className="flex-col flex-center modal-child">
       
        
        <div className="button-small" onClick={props.close}>Exit</div>
    </div>
     

    );
}

export default ViewMod;