import React, { Component } from "react";
import Menu from "../general/menu";
import WorkDay from "../appointments/workDay";
import Calendar from 'react-calendar'
import MyModal from "../general/Modal";
import CreateMod from '../appointments/CreateMod';
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
                    action: <CreateMod close={this.closeModal} name={"edition"}></CreateMod>
                })
                break;
             case "create":
                this.setState({
                    crudActive:true,
                    action: <CreateMod close={this.closeModal} name="creation"></CreateMod>
                })
                break;
                case "delete":
                    this.setState({
                        crudActive:true,
                        action: <DeleteMod close={this.closeModal} name={"appointment"}></DeleteMod>
                    })
                    break;  
                  default:
                   
                        this.setState({
                            crudActive:true,
                            action: <CreateMod close={this.closeModal}></CreateMod>
                        })
                        break;    
        }
    }
 

 render(){
    return <>
    <Menu/>
    <div className="flex-col scroll">
        
            <div className="flex-col flex-center">

                <h1>Appointments</h1>
                
                <div className="flex-row flex-wrap flex-jcenter">
                    
                    <WorkDay open={this.openModal} close={this.closeModal}></WorkDay>
                    <div className="calendar p-1 flex-col">   <Calendar /></div> 
                    <MyModal status={this.state.crudActive} toggle={this.closeModal} type={this.state.action}/>  
                    
                </div>   
            
            </div>   
            
        </div>    
    </>

    }
}

export default Appointments;