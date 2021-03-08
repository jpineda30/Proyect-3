import React from "react";


function CrudActions(props){

    console.log(props)
    return(

        
        <div className="flex-row flex-around">
        <i onClick={props.actions.view} className="fas fa-eye fa-2x"></i>
        <i onClick={props.actions.edit} className="far fa-edit fa-2x"></i>
        <i onClick={props.actions.delete} className="fas fa-trash-alt fa-2x"></i>
    </div>   



    );
}

export default CrudActions;