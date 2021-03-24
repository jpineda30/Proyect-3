import React, { useContext, useState } from "react";
import LogIn from "../login/login"
import SignUp from "../login/signup";
import MyModal from  "../general/Modal";
import { Redirect } from "react-router";
import {withRouter} from "react-router-dom";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/globalState";


function Home(props){

    const {login, isLogged } = useStoreContext();
    
    const closeModal = ()=>{
        setState({
            ...state,
            isActive:true
        });
        console.log(state.isActive);
    }

    const [state,setState]= useState(
            {

                isActive:false,
                type: <SignUp close={closeModal} history={props.history}/>,
                
    
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