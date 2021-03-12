import React from "react";


function CrudActions(props){

   

    function onDelete(){
        
        props.toggle("delete");
    }

    function onEdit(){
        
        props.toggle("edit");
    }

    function onView(){
        
        props.toggle("view");
    }

    return(

        
        <div className="flex-row flex-around">
        <i onClick={onView} className="fas fa-eye fa-2x"></i>
        <i onClick={onEdit} className="far fa-edit fa-2x"></i>
        <i onClick={onDelete} className="fas fa-trash-alt fa-2x"></i>
    </div>   



    );
}

export default CrudActions;