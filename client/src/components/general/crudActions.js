import React from "react";


function CrudActions(props){

   

    function onDelete(){
        
        props.toggle("delete",props.ide);
    }

    function onEdit(){
        
        props.toggle("edit",props.ide);
    }

    function onView(){
        
        props.toggle("view",props.ide);
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