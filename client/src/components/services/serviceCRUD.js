import React from "react";
import Actions from "../general/crudActions";
import {services} from "../test json/services.json";



function ServiceCRUD(props){


    return(    <div className="is-table radius1">

    <div className="is-header flex-row">
        <div></div>
        <div>Name</div>
        <div>Cost</div>
        <div>Description</div>
        <div>Actions</div>
    </div>
    
    {services.map((service)=>{
        return(
            <div className="is-row flex-row">
            <div className="first"></div>
            <div>{service.name}</div>
            <div>{service.cost}</div>
            <div>{service.description}</div>
            <Actions  status = {props.status} toggle={props.toggle}/>
        </div>
        );
    })}
   
</div>
);
}

export default ServiceCRUD;