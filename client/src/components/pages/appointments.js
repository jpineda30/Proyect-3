import React, { Component } from "react";
import WorkDay from "../appointments/workDay";
import Calendar from 'react-calendar'
import MyModal from "../general/Modal";
import CreateMod from '../appointments/CreateMod';
import EditMod from "../appointments/EditMod";
import ViewMod from "../appointments/ViewMod";
import DeleteMod from "../general/DeleteMod";



class Appointments extends Component{

    constructor(){
        super()
        this.state= {
            crudActive:false,
            action:<CreateMod close={this.closeModal}></CreateMod>
        }
    }



    closeModal = ()=>{
        this.setState({
            crudActive:false,
            
        })
    }

    openModal = (param)=>{
        switch (param) {
            case "edit":
                this.setState({
                    crudActive:true,
                    action: <EditMod close={this.closeModal}></EditMod>
                })
                break;
             case "create":
                this.setState({
                    crudActive:true,
                    action: <CreateMod close={this.closeModal}></CreateMod>
                })
                break;
                case "delete":
                    this.setState({
                        crudActive:true,
                        action: <DeleteMod close={this.closeModal}></DeleteMod>
                    })
                    break;  
                  default:
                   
                        this.setState({
                            crudActive:true,
                            action: <ViewMod close={this.closeModal}></ViewMod>
                        })
                        break;    
        }
    }
 

 render(){
    return <div className="flex-col scroll">
        
            <div className="flex-col flex-center">

                <h1>Appointments</h1>
                
                <div className="flex-row flex-wrap flex-jcenter">
                    
                    <WorkDay open={this.openModal}></WorkDay>
                    <div className="calendar p-1 flex-col">   <Calendar /></div> 
                    <MyModal status={this.state.crudActive} toggle={this.closeModal} type={this.state.action}/>  
                    
                </div>   
            
            </div>   
            
        </div>    

    }
}

export default Appointments;