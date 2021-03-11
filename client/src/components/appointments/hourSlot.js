import React from "react";



function HourSlot(){
    return(  
        <div className="flex-row p-1 back2 m-1">

        <div className="flex-col flex-center p-1">
            <p className="m-0">From Hour</p>
            <p className="m-0">To Hour</p>
        </div >

        <div className="flex-col ">

                <div className="flex-row my-1">
                    <i className="fas fa-user left-blue"></i>
                    <p className="right-white">Patient Name</p>
                </div>

                <div className="flex-row ">
                    <i className="fas fa-user left-purple"/>
                    <p className="right-white">Patient Name</p>
                </div>    
                
            
            </div>


    </div>

);
}

export default HourSlot;