import React from "react";
import Slot from "./hourSlot";
import AddBtn2 from "../general/AddBtn2"


function WorkDay(props){
    return(  
<div>

                    <div className="flex-col back2 work-day">
                            <div className="top-green flex-row flex-acenter flex-between">
                                <p className="mini"></p>
                                <p>25-03-2021</p>
                                 <AddBtn2 open={props.open}/>
                            </div>
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