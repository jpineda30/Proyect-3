import React, { Component } from "react";
import Menu from "../general/menu";
import AddBtn from "../general/AddBtn";
import ServiceCRUD from "../services/serviceCRUD";
import CreateMod from '../services/CreateMod';
import DeleteMod from "../general/DeleteMod";
import MyModal from '../general/Modal';


class Services extends Component{

    constructor(){
        super()
        this.state= {
            crudActive:false,
            action:<CreateMod close={this.closeModal}></CreateMod>,
            services:{}
        }
    }

    componentWillUnmount(){
        //Modal.setAppElement("CreateMod");
    }


    toggleModalCrud= (param)=>{
      

        switch (param) {
            case "edit":
                this.setState({
                    crudActive:!this.state.crudActive,
                    action: <CreateMod close={this.closeModal} type={param}></CreateMod>
                })
                break;
             case "create":
                this.setState({
                    crudActive:!this.state.crudActive,
                    action: <CreateMod close={this.closeModal} type={param}></CreateMod>
                })
                break;
                case "delete":
                    this.setState({
                        crudActive:!this.state.crudActive,
                        action: <DeleteMod close={this.closeModal} name={"service"}></DeleteMod>
                    })
                    break;  
                  default:
                   
                        this.setState({
                            crudActive:!this.state.crudActive,
                            action: <CreateMod close={this.closeModal} type={param}></CreateMod>
                        })
                        break;    
        }
        
      
       
    }

    closeModal = ()=>{
        this.setState({
            crudActive:false,
            
        })
    }

    getServices = ()=>{
        
    }

   render(){
   

        
       return <>
       <Menu/>
        <div className="content flex-col flex-center">
    
       <div className="flex-col crud-body">
      
           <div className="titles">
               <h1>Services</h1>
               <AddBtn action={this.toggleModalCrud}/>
             

           </div>
           <ServiceCRUD status ={this.state.crudActive} toggle={this.toggleModalCrud}/>
           <MyModal status ={this.state.crudActive} toggle={this.toggleModalCrud} type={this.state.action} close={this.closeModal}/>
           
   </div>   
   
</div>    

</>

   
   }
}

export default Services;