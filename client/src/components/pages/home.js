import React, { Component } from "react";
import LogIn from "../login/login"
import SignUp from "../login/signup";
import MyModal from  "../general/Modal";

class Home extends Component{

        state= {
            isActive:false,
            type: <SignUp close={this.closeModal}/>

        }

        openModal = ()=>{
            this.setState({
                isActive:true,
                type:<SignUp close={this.closeModal}/>
            });
            console.log(this.state.isActive);
        }

        closeModal = ()=>{
            this.setState({
                isActive:false
            });
            console.log(this.state.isActive);
        }


    render(){
    return(

        
        <div className="flex-col flex-center fh">
            
            <LogIn open={this.openModal} close={this.closeModal}/>
            <MyModal status={this.state.isActive} toggle={this.closeModal} type={this.state.type}/>
            
            
        </div>    



    )}
}

export default Home;