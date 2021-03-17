import React, { Component } from "react";
import LogIn from "../login/login"
import SignUp from "../login/signup";
import MyModal from  "../general/Modal";
import api from "../../utils/api"
import { Redirect } from "react-router";
import {withRouter} from "react-router-dom";


class Home extends Component{

       constructor(props){
           super(props);
           this.state= {
            isActive:false,
            type: <SignUp close={this.closeModal}/>,
            isLogged:true

        }


       }

       /* state= {
            isActive:false,
            type: <SignUp close={this.closeModal}/>,
            isLogged:true

        }*/


        componentWillMount(){
            

            //Redirect when logged        
           // this.props.history.push("/appointments");

           /* api.isLogged().then((res)=>{

                if(res.data)
                { 
                    this.setState({
                     isLogged:true,
                    
                                });
                    <Redirect to="/appointments"  />           
                                
            }
                else{
                    console.log("not logged")
                }
               

            });*/

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

export default withRouter(Home);