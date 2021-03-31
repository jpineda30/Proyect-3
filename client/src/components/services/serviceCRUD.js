import React from "react";
import Actions from "../general/crudActions";
import { services } from "../test json/services.json";

function ServiceCRUD(props) {
  console.log(props.services);
  return (
    <div>
      <div className="is-table radius1">
        <div className="is-header flex-row">
          <div></div>
          <div>Name</div>
          <div>Cost</div>
          <div>Description</div>
          <div>Actions</div>
        </div>

        {props.services.map((service) => {
          return (
            <div>
              <div className="is-row flex-row">
                <div className="first"></div>
                <div>{service.name}</div>
                <div>{service.price}</div>
                <div>
                  <div className="hoverDetails">{service.details}</div>
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
