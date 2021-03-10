import React from "react";


function CreateMod(props){
    let content = null;

    if(props.state.flag === 'create'){
      content = (
      <>
        <h1>Service Creation</h1>
            <label>name</label>
            <input></input>
            <label>cost</label>
            <input></input>
            <div className="button-small" onClick={props.toggle}>Exit</div>
     </>
      )
    }
  
    return(
        <>
        {content}
        </>
        
     /*  <>{props.state ?   <div className="flex-col flex-center modal">

        <div className="flex-col flex-center modal-child">
            <h1>Service Creation</h1>
            <label>name</label>
            <input></input>
            <label>cost</label>
            <input></input>
            <div className="button-small" onClick={props.toggle}>Exit</div>
        </div>
      </div> :null}</>  
 */


    );
}

export default CreateMod;