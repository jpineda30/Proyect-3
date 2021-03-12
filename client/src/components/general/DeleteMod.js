import React from "react";


function DeleteMod(props){

    return(<>
    
        <div className="modal-child flex-col flex-center">
        <h1 className="size4">Are you sure you want to delete this {props.name}?</h1>
        <div className="flex-row flex-center">

            <div className="button-small" onClick={props.toggle}>Delete</div>
            <div className="button-small" onClick={props.close}>Cancel</div> 

        </div>
        
        </div>
    
    </>);

}

export default DeleteMod;