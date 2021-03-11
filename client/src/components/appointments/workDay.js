import React from "react";
import Slot from "./hourSlot";


function WorkDay(){
    return(  
<div>

                    <div className="flex-col back2 work-day">
                            <div className="top-green">21-03-2021</div>
                            <div className="flex-col p-1">
                                <Slot/>
                                <Slot/>
                                <Slot/>
                                <Slot/>
                            </div>
                          </div>


</div>
);
}

export default WorkDay;