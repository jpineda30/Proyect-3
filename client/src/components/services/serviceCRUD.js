import React from "react";
import Actions from "../general/crudActions";

function ServiceCRUD(props) {
  console.log(props.services);
  return (
    <div>
      <div className="is-table radius1">
        <div className="is-header flex-row flex-around">
          <div className="space"></div>
          <div className="is-row-child extra">Name</div>
          <div className="mobil-off">Cost</div>
          <div className="mobil-off">Description</div>
          <div className="is-row-child">Actions</div>
        </div>

        {props.services.map((service) => {
          return (
            <div>
              <div className="is-row flex-row">
                <div className="first"></div>
                <div className="is-row-child extra">{service.name}</div>
                <div className="mobil-off">{service.price}</div>
                <div className="mobil-off">
                  <div className="hoverDetails mobil-off">
                    {service.details}
                  </div>
                </div>
                <Actions
                  status={props.status}
                  toggle={props.toggle}
                  ide={service._id}
                  object={service}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceCRUD;
