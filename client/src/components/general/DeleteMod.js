import React from "react";
import api from "../../utils/API-";

// function handleClick(props) {
// 	//props.toggle;
// 	api.deleteService(props.ide).then((res) => {
// 		props.close();
// 	});
// }

function DeleteMod(props) {
  const handleClick = () => {
    console.log(props);
    switch (props.name) {
      case "service":
        api.deleteService(props.ide).then((res) => {
          console.log(res);
          props.close();
          props.reload();
        });
        break;
      case "patient":
        api.deletePatient(props.ide).then((res) => {
          console.log("you´re deliting a patient" + res);
          props.close();
          props.reload();
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="modal-child flex-col flex-center">
        <h1 className="size4">
          Are you sure you want to delete this {props.name} {props.ide}?
        </h1>
        <div className="flex-row flex-center">
          <div
            className="button-small"
            onClick={() => {
              handleClick();
            }}
          >
            Delete
          </div>
          <div className="button-small" onClick={props.close}>
            Cancel
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteMod;
