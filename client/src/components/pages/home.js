import React, { useContext, useState, useEffect } from "react";
import LogIn from "../login/login"
import SignUp from "../login/signup";
import MyModal from  "../general/Modal";
import { Redirect } from "react-router";
import {withRouter} from "react-router-dom";
import { useStoreContext } from "../../utils/globalState";


function Home(props){

    const {login, isLogged } = useStoreContext();
    const [isActive, setActive] = useState(false);

    
   

    const closeModal = ()=>{
        
        setActive(false);
        // setState({
        //     ...state,
        //     isActive:true
        // });
        // console.log(state.isActive);
    }
    
    const [action, setAction] = useState(<SignUp close={closeModal}/>);
    // const [state,setState]= useState(
    //         {

    //             isActive:false,
    //             type: <SignUp close={closeModal} history={props.history}/>,
                
    
    //         }
    //     );

    const  openModal = ()=>{
        setActive(true)
        setAction(<SignUp close={closeModal}/>)
            // setState({
            //     ...state,
            //     isActive:true,
            //     type:<SignUp close={closeModal}/>
            // });
            // console.log(state.isActive);
        }

    

     const logout = ()=>{
         isLogged(false);
            // setState({
            //     ...state,
            //     isLogged:false
            // })
            props.history.push("/home");
        }

      const  sendSignup=()=>{
            return <SignUp close={closeModal} history={props.history}/>
        }


        
    
    return(

        
        <div className="flex-col flex-center fh">
          
            <LogIn open={openModal} close={closeModal} login={login} logout={logout}/>
            <MyModal status={isActive} toggle={closeModal} type={sendSignup()}/>
            
            
            
        </div>    



    )}


export default withRouter(Home);