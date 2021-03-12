import React, { Component } from "react";
import AddBtn from "../general/AddBtn";
import ServiceCRUD from "../services/serviceCRUD";
import CreateMod from '../services/CreateMod';
import EditMod from "../services/EditMod";
import ViewMod from "../services/ViewMod";
import DeleteMod from "../general/DeleteMod";
import MyModal from '../general/Modal';


class Services extends Component{

    constructor(){
        super()
        this.state= {
            crudActive:false,
            action:<CreateMod close={this.closeModal}></CreateMod>
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
                    action: <EditMod close={this.closeModal}></EditMod>
                })
                break;
             case "create":
                this.setState({
                    crudActive:!this.state.crudActive,
                    action: <CreateMod close={this.closeModal}></CreateMod>
                })
                break;
                case "delete":
                    this.setState({
                        crudActive:!this.state.crudActive,
                        action: <DeleteMod close={this.closeModal} name={"Service"}></DeleteMod>
                    })
                    break;  
                  default:
                   
                        this.setState({
                            crudActive:!this.state.crudActive,
                            action: <ViewMod close={this.closeModal}></ViewMod>
                        })
                        break;    
        }
        
      
       
    }

    closeModal = ()=>{
        this.setState({
            crudActive:false,
            
        })
    }

   render(){
   

        
       return  <div className="content flex-col flex-center">
    
       <div className="flex-col crud-body">
      
           <div className="titles">
               <h1>Services</h1>
               <AddBtn action={this.toggleModalCrud}/>
             

           </div>
           <ServiceCRUD status ={this.state.crudActive} toggle={this.toggleModalCrud}/>
           <MyModal status ={this.state.crudActive} toggle={this.toggleModalCrud} type={this.state.action} close={this.closeModal}/>
           
   </div>   
   
</div>    



   
   }
}

export default Services;