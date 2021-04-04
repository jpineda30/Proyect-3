import React from "react";

function Message(props) {
  console.log(props);
  if (props.on) {
    setTimeout(() => {
      props.timer();
    }, 3000);
  }

  return props.on ? (
    <div className={props.type + " message"}>
      <p>{props.text}</p>
    </div>
  ) : null;
}

export default Message;
