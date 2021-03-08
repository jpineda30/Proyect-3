import React from "react";
import AddBtn from "../AddBtn";
import ServiceCRUD from "../serviceCRUD";

function Services(){


    return(

        
        <div className="content flex-col">
        
                <div className="flex-col flex-center">
                <h1>Services</h1>
                <AddBtn/>
                <ServiceCRUD/>
            
            </div>   
            
        </div>    



    );
}

export default Services;