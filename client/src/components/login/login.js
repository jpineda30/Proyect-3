import React from "react";

function LogIn(props){

   const logIn=()=>{
       //login logic
   }

    return(

        
        <div className="back2 flex-col flex-center p-3">
           
           
                <label>User</label>
                <input/>
                <label>Password </label>
                <input/> 
                <div className="flex-row ">
                    <div className="button-purple-medium radius1 m-1" onClick={logIn}>Login </div>
                    <div className="button-blue-medium m-1 radius1" onClick={props.open}>Sign Up </div>
                </div>
            
        </div>    



    );
}

export default LogIn;