import React from "react";
import Pdf from "react-to-pdf";
import Actions from "../general/crudActions";
import {services} from "../test json/services.json";


const ref = React.createRef()

function ServiceCRUD(props){

console.log(props.services);
    return(    



<div>
    
                <Pdf targetRef={ref} filename="services.pdf">
                    {({ toPdf })=> <button className="button flex-row flex-around flex-center" onClick={toPdf}><i className="fas fa-file-pdf" ></i>
                    <p className="has-text-white">Generate PDF</p></button>}
                </Pdf>

            


    <div  ref={ref} className="is-table radius1">



    <div className="is-header flex-row">

        <div></div>
        <div>Name</div>
        <div>Cost</div>
        <div>Description</div>
        <div>Actions</div>
    </div>
    
    {props.services.map((service)=>{
        return(
            <div>

                
            <div className="is-row flex-row">

            <div className="first"></div>
            <div>{service.name}</div>
            <div>{service.price}</div>
            <div>{service.details}</div>
            <Actions  status = {props.status} toggle={props.toggle} ide={service._id}/>
           </div>

        </div>
        );
    })}
   
</div>
</div>
);
}

export default ServiceCRUD;