import React from "react";

function AddToCalendar(props) {
  return (
    <div className="flex-row flex-center">
      {" "}
      <input type="checkbox" className="checkbox2" />
      <span className="p-1">Add To Calendar</span>
    </div>
  );
}

export default AddToCalendar;
