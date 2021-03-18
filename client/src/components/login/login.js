import React, { useRef } from "react";

function LogIn(props){



    let user = useRef();
    let Password = useRef();


   const validateUser=()=>{
        let data = {

            "user":user.current.value,
            "password":Password.current.value
        }    
        
        
    props.login(data);
        
        
    

   }

    return(

        
        <div className="back2 flex-col flex-center p-3">
           
           
                <label>User</label>
                <input ref={user}/>
                <label>Password </label>
                <input ref={Password}/> 
                <div className="flex-row ">
                    <div className="button-purple-medium radius1 m-1" onClick={validateUser}>Login </div>
                    <div className="button-blue-medium m-1 radius1" onClick={props.open}>Sign Up </div>
                </div>
            
        </div>    



    );
}

export default LogIn;