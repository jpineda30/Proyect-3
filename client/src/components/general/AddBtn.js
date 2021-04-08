import React from "react";

function AddBtn(props) {
  function onCreate() {
    props.action("create");
  }

  return (
    <div
      className="button-medium flex-row flex-around flex-center"
      onClick={onCreate}
      data-name={props.name}
    >
      <i className="fas fa-plus fa-2x"></i>
      <p className="has-text-white">Create</p>
    </div>
  );
}

export default AddBtn;
