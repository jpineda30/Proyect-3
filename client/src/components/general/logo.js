import React from "react";

function Logo(props) {
  return (
    <>
      <div className="flex-col flex-center mb-1">
        <div className="logo"></div>
        <div className="flex-row">
          <h1 className="text-logo">e</h1>
          <h1 className="text-logo text-purple">M</h1>
          <h1 className="text-logo">ed</h1>
        </div>
      </div>
    </>
  );
}

export default Logo;
