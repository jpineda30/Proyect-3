import React from "react";

function AddBtn2(props) {
  function onCreate() {
    props.open("create", props.date);
  }

  return (
    <div
      className="button-mini flex-row flex-around flex-center"
      onClick={onCreate}
      data-name={props.name}
    >
      <i className="fas fa-plus fa-2x"></i>
    </div>
  );
}

export default AddBtn2;
