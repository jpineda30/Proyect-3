import React, { Component } from "react";
import LogIn from "../login/login"
import SignUp from "../login/signup";
import MyModal from  "../general/Modal";
import { Redirect } from "react-router";
import {withRouter} from "react-router-dom";
import API from "../../utils/API";


class Home extends Component{

       constructor(props){
           super(props);
           this.state= {
            isActive:false,
            type: <SignUp close={this.closeModal} history={props.history}/>,
            isLogged:false

        }


       }

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

        login = (data)=>{

            
            if (data.user != "" && data.password != "")
            {

                //VALIDATE USER FOR LOGIN

                /*
                API.LogIn(data.user, data.password).then((response)=>{

                    if(response == true)
                    {
                        this.setState({
                            isLogged:true
                        })
                        this.props.history.push("/appointments");
                    }
                    else{
                        {alert("no user")}
                    }

                })

                */
                this.setState({
                    isLogged:true
                })
                this.props.history.push("/appointments");
               
            }
            else

            {alert("no user")}


               
            }

        logOut = ()=>{
            this.setState({
                isLogged:false
            })
            this.props.history.push("/home");
        }

        sendSignup=()=>{
            return <SignUp close={this.closeModal} history={this.props.history}/>
        }


    render(){
    return(

        
        <div className="flex-col flex-center fh">
            
            <LogIn open={this.openModal} close={this.closeModal} login={this.login} logout={this.logout}/>
            <MyModal status={this.state.isActive} toggle={this.closeModal} type={this.sendSignup()}/>
            
            
        </div>    



    )}
}

export default withRouter(Home);