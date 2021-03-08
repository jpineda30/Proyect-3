import React from "react";

function AddBtn(props){


    return(

        
        <div className="button-small flex-row flex-around flex-center" data-name={props.name}>
           
           
                <i className="fas fa-plus fa-2x"></i>
                <p className="has-text-white">Create</p>
            
        </div>    



    );
}

export default AddBtn;