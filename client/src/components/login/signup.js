import React, {useRef} from "react";
import API from "../../utils/API";
import {withRouter} from "react-router-dom";


function SignUp(props){

    let user = useRef();
    let email= useRef();
    let pass1 = useRef();
    let pass2 = useRef();
    

    const SignUp=()=>{
        
        let data = {
            "user" : user.current.value,
            "email": email.current.value,
            "pass1" : pass1.current.value,
            "pass2" : pass2.current.value
            
        }
    
            if(data.user != "" && data.email !="" && data.pass1 != "" && data.pass2 != "" )
            {
                if(data.pass1 === data.pass2)
                {
                    //validate if user already exists
                    API.createUser(data.user, data.pass1, data.email).then((response)=>{
                        console.log(response)
                        //if success
                            this.props.history.push("/appointments");
                        //else
                            //error message    
                    }).catch((error)=>{alert(error)});
                }
                else
                {
                    alert("validation password does not match")
                }
            }
            else
            { alert("validation no empty fields")}    


        }
    

    return(

        
        <div className="modal-child flex-col flex-center p-3">
           
           
                <label>User Name</label>
                <input ref={user} type="text"/>

                <label>Email</label>
                <input ref={email} type="text"/>

                <label>Password </label>
                <input ref={pass1} type="password"/> 

                <label>Repeat Password </label>
                <input ref={pass2} type="password"/> 


                <div className="flex-row ">
                    <div className="button-purple-medium radius1 m-1" onClick={SignUp}>SignUp </div>
                    <div className="button-blue-medium m-1 radius1" onClick={props.close}>Cancel </div>
                </div>
            
        </div>    



    );
}

export default SignUp;