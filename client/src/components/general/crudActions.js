import React from "react";

<<<<<<< HEAD

function CrudActions(props){

   

    function onDelete(){
        
        props.toggle("delete",props.ide);
    }

    function onEdit(){
        
        props.toggle("edit",props);
    }

    function onView(){
        
        props.toggle("view",props);
    }

    return(

        
        <div className="flex-row flex-around">
        <i onClick={onView} className="fas fa-eye fa-2x"></i>
        <i onClick={onEdit} className="far fa-edit fa-2x"></i>
        <i onClick={onDelete} className="fas fa-trash-alt fa-2x"></i>
    </div>   



    );
=======
function CrudActions(props) {
  function onDelete() {
    props.toggle("delete", props.service._id);
  }

  function onEdit() {
    props.toggle("edit", props.service);
  }

  function onView() {
    props.toggle("view", props.service);
  }

  return (
    <div className="flex-row flex-around">
      <i onClick={onView} className="fas fa-eye fa-2x"></i>
      <i onClick={onEdit} className="far fa-edit fa-2x"></i>
      <i onClick={onDelete} className="fas fa-trash-alt fa-2x"></i>
    </div>
  );
>>>>>>> master
}

export default CrudActions;
