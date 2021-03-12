import React from "react";

function SignUp(props){

    

   const signUp=()=>{
       //SignUp logic
   }

    return(

        
        <div className="modal-child flex-col flex-center p-3">
           
           
                <label>User Name</label>
                <input type="text"/>

                <label>Email</label>
                <input type="text"/>

                <label>Password </label>
                <input type="password"/> 

                <label>Repeat Password </label>
                <input type="password"/> 


                <div className="flex-row ">
                    <div className="button-purple-medium radius1 m-1" onClick={SignUp}>SignUp </div>
                    <div className="button-blue-medium m-1 radius1" onClick={props.close}>Cancel </div>
                </div>
            
        </div>    



    );
}

export default SignUp;