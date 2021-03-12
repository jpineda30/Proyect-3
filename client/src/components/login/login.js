import React from "react";

function LogIn(props){

   

    return(

        
        <div className="back1 flex-col flex-center">
           
           
                <label>User</label>
                <input/>
                <label>Password </label>
                <input/> 
                <div className="flex-row">
                    <div className="button-medium">Login </div>
                    <div className="button-medium">Sign Up </div>
                </div>
            
        </div>    



    );
}

export default LogIn;