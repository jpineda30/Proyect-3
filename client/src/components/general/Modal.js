import React from "react";


function MyModal(props){
   
  
    return(
       
        
       <>{props.status ?   <div className="flex-col modal">

       
            <div className="flex-col-reverse" >
            <div className="close" onClick={props.toggle}>X</div>
            </div>
            <div className="flex-col flex-center is-full">
              {props.type}
            </div>
        
      </div> :null}</>  
 


    );
}

export default MyModal;