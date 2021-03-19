import React, { useState } from "react";
import LogIn from "../login/login"
import SignUp from "../login/signup";
import MyModal from  "../general/Modal";
import { Redirect } from "react-router";
import {withRouter} from "react-router-dom";
import API from "../../utils/API";


function Home(props){

    const closeModal = ()=>{
        setState({
            ...state,
            isActive:false
        });
        console.log(state.isActive);
    }

        const [state,setState]= useState(
            {

                isActive:false,
                type: <SignUp close={closeModal} history={props.history}/>,
                isLogged:false
    
            }
        );


    

      const  openModal = ()=>{
            setState({
                ...state,
                isActive:true,
                type:<SignUp close={closeModal}/>
            });
            console.log(state.isActive);
        }

      

      const  login = (data)=>{

            
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
                setState({
                    ...state,
                    isLogged:true
                })
                props.history.push("/appointments");
               
            }
            else

            {alert("no user")}


               
            }

     const logout = ()=>{
            setState({
                ...state,
                isLogged:false
            })
            props.history.push("/home");
        }

      const  sendSignup=()=>{
            return <SignUp close={closeModal} history={props.history}/>
        }


    
    return(

        
        <div className="flex-col flex-center fh">
            
            <LogIn open={openModal} close={closeModal} login={login} logout={logout}/>
            <MyModal status={state.isActive} toggle={closeModal} type={sendSignup()}/>
            
            
        </div>    



    )}


export default withRouter(Home);