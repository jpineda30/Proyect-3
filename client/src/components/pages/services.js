import React, { Component } from "react";
import AddBtn from "../AddBtn";
import ServiceCRUD from "../serviceCRUD";
import Modal from 'react-modal';
import CreateMod from '../CreateMod';


class Services extends Component{

    constructor(){
        super()
        this.state= {
            isActive:false
        }
    }

    componentWillUnmount(){
        //Modal.setAppElement("CreateMod");
    }

    toggleModal= ()=>{
        this.setState({
            isActive:!this.state.isActive
        })
    }

    state = {
    
       init:""
    
    };

    handleCreate = ()=>{
        
        alert("Create");
    }

    handleView = ()=>{

        alert("view");
    }
    handleEdit = ()=>{

        alert("Edit");
    }
    handleDelete = ()=>{

        alert("Delete");
    }

   
     

   render(){
   

        
       return  <div className="content flex-col flex-center">
    
       <div className="flex-col crud-body">
      
           <div className="titles">
               <h1>Services</h1>
               <AddBtn action={this.toggleModal}/>
               <CreateMod state={this.state.isActive} toggle={this.toggleModal}/>
              
           </div>
           <ServiceCRUD view={this.handleView} edit={this.handleEdit} delete={this.handleDelete}/>
   
   </div>   
   
</div>    



   
   }
}

export default Services;