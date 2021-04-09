import React from "react";

function ServiceList(props) {
  const setService = (e) => {
    props.set(e.target.id);
    props.setName(e.target.innerHTML);
    props.off();
  };

  return props.visible ? (
    <div className="floating-list-wraper">
      <div className="flex-col floating-list violet">
        {props.services.map((service) => {
          let ser = (
            <p onClick={setService} id={service._id}>
              {service.name}
            </p>
          );

          return ser;
        })}
      </div>
    </div>
  ) : null;
}

export default ServiceList;
