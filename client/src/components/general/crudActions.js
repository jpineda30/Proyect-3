import React from "react";

function CrudActions(props) {
  function onDelete() {
    props.toggle("delete", props.object._id);
  }

  function onEdit() {
    props.toggle("edit", props);
  }

  function onView() {
    props.toggle("view", props);
  }

  return (
    <div className="flex-row flex-around flex-center">
      <i onClick={onView} className="fas fa-eye fa-2x"></i>
      <i onClick={onEdit} className="far fa-edit fa-2x"></i>
      <i onClick={onDelete} className="fas fa-trash-alt fa-2x"></i>
    </div>
  );
}

export default CrudActions;
