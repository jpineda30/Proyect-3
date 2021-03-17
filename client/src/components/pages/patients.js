import React, { Component } from "react";
import Menu from "../general/menu";
import AddBtn from "../general/AddBtn";
import PatientCRUD from "../patients/patientCRUD";
import CreatePatMod from "../patients/createPatMod";
import DeleteMod from "../general/DeleteMod"; 
import MyModal from "../general/Modal";
import ViewPatMod from "../patients/viewPatMod"


class Patients extends Component{

    constructor(){
        super()
        this.state= {
            crudActive:false,
            action:<CreatePatMod close={this.closeModal}></CreatePatMod>
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
                    action: <CreatePatMod close={this.closeModal} type={param}></CreatePatMod>
                })
                break;
             case "create":
                this.setState({
                    crudActive:!this.state.crudActive,
                    action: <CreatePatMod close={this.closeModal} type={param}></CreatePatMod>
                })
                break;
                case "delete":
                    this.setState({
                        crudActive:!this.state.crudActive,
                        action: <DeleteMod close={this.closeModal} name={"patient"}></DeleteMod>
                    })
                    break;  
                  case "view":
                   
                        this.setState({
                            crudActive:!this.state.crudActive,
                            action: <ViewPatMod close={this.closeModal} type={"patient"}></ViewPatMod>
                        })
                    break;    
                 default:
        
                            this.setState({
                                crudActive:!this.state.crudActive,
                                action: <CreatePatMod close={this.closeModal} type={param}></CreatePatMod>
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
   

        
       return  <>
       <Menu/>
       <div className="content flex-col flex-center">
    
       <div className="flex-col crud-body">
      
           <div className="titles">
               <h1>Patients</h1>
               <AddBtn action={this.toggleModalCrud}/>
             

           </div>
           <PatientCRUD status ={this.state.crudActive} toggle={this.toggleModalCrud}/>
           <MyModal status ={this.state.crudActive} toggle={this.toggleModalCrud} type={this.state.action} close={this.closeModal}/>
           
   </div>   
   
</div>    


</>
   
   }
}

export default Patients;

/* 





function Patients(){


    return(
        < >
        <Menu/>

        <div className="content flex-col">
        
        <div className="flex-col flex-center">
        <h1>Patients</h1>
        <AddBtn/>
        <PatientCRUD/>
    
    </div>   
    
</div>    
</>


    );
}

export default Patients; */