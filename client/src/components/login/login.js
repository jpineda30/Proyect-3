import React, { useRef,useState } from "react";
import { useStoreContext } from "../../utils/globalState";
import Redirect from "react-router-dom";

function LogIn(props){

    //let user = useRef();
   //let Password = useRef();

   const [user,setUser] = useState("");
   const [password,setPassword] = useState("");


   const {login} = useStoreContext();

   const validateUser=()=>{

          if(user != "" && password != "")
          { 
              login(user, password);
          }
          else
          {
              alert("no empty fields");
          }
          

       
        

   }
   

    return(

        
        <div className="back2 flex-col flex-center p-3">
           
           
                <label>User</label>
                <input onChange={(e)=>{setUser(e.target.value)}}/>
                <label>Password </label>
                <input onChange={(e)=>{setPassword(e.target.value)}}/> 
                <div className="flex-row ">
                    <div className="button-purple-medium radius1 m-1" onClick={validateUser}>Login </div>
                    <div className="button-blue-medium m-1 radius1" onClick={props.open}>Sign Up </div>
                </div>
            
        </div>    



    );
}

export default LogIn;