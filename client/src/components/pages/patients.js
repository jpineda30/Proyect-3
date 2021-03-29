import React, { useState, useEffect } from "react";
import Menu from "../general/menu";
import AddBtn from "../general/AddBtn";
import PatientCRUD from "../patients/patientCRUD";
import CreatePatMod from "../patients/createPatMod";
import DeleteMod from "../general/DeleteMod";
import MyModal from "../general/Modal";
import ViewPatMod from "../patients/viewPatMod";
import API from "../../utils/API-";

function Patients() {
  const closeModal = () => {
    setCRUDActive(false);
  };

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const [patients, setPatients] = useState([]);
  const [action, setAction] = useState(
    <CreatePatMod close={closeModal}></CreatePatMod>
  );
  const [crudActive, setCRUDActive] = useState(false);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = () => {
    API.getPatients().then((res) => {
      setPatients(res.data);
    });
  };
  const toggleModalCrud = (param, id) => {
    switch (param) {
      case "delete":
        setCRUDActive(!crudActive);
        setAction(
          <DeleteMod
            close={closeModal}
            name={"patient"}
            ide={id}
            reload={loadPatients}
          ></DeleteMod>
        );
        break;
      default:
        setCRUDActive(!crudActive);
        setAction(
          <CreatePatMod
            close={closeModal}
            type={param}
            addService={addPatient}
            ide={id}
            reload={loadPatients}
          ></CreatePatMod>
        );
        break;
    }
  };

  return (
    <>
      <Menu />
      <div className="content flex-col flex-center">
        <div className="flex-col crud-body">
          <div className="titles">
            <h1>Patients</h1>
            <AddBtn action={toggleModalCrud} />
          </div>
          <PatientCRUD
            status={crudActive}
            toggle={toggleModalCrud}
            patients={patients}
          />
          <MyModal
            status={crudActive}
            toggle={toggleModalCrud}
            type={action}
            close={closeModal}
          />
        </div>
      </div>
    </>
  );
}

export default Patients;

/* function Patients() {


    const  closeModal = ()=>{

        setCRUDActive(false);
  
    };


    const addPatient = (patient) => {
        setPatients([...patient,patient]);
    }



    const [patients, setPatients] = useState([]);
    const [action, setAction] = useState(<CreatePatMod close={closeModal}></CreatePatMod>);
    const [crudActive, setCRUDActive] = useState(false);


    useEffect(()=>{
        //Modal.setAppElement("CreateMod");
        //Load Services
        API.getPatients().then(res=> {
            setPatients(res.data);
        });        
    }, []);
    const toggleModalCrud= (param, id)=>{
      

        switch (param) {
                case "delete":
                    setCRUDActive(!crudActive);
                    setAction(<DeleteMod close={closeModal} name={"patient"} ide={id}></DeleteMod>);
                    break;  
                  default:
                    setCRUDActive(!crudActive);
                    setAction(<CreatePatMod close={closeModal} type={param} addPatient= {addPatient} ide={id}></CreatePatMod>);
                    break;    
        }
    };
   
        
       return <>
       <Menu/>
        <div className="content flex-col flex-center">
    
       <div className="flex-col crud-body">
      
           <div className="titles">
               <h1>Patients</h1>
               <AddBtn action={toggleModalCrud}/>
             

           </div>
           <PatientCRUD status ={crudActive} toggle={toggleModalCrud} patients = {patients} />
           <MyModal status ={crudActive} toggle={toggleModalCrud} type={action} close={closeModal}/>
           
   </div>   
   
</div>    

</>
}


class Patients extends Component {
  constructor() {
    super();
    this.state = {
      crudActive: false,
      action: <CreatePatMod close={this.closeModal}></CreatePatMod>,
    };
  }

  componentWillUnmount() {
    //Modal.setAppElement("CreateMod");
  }

  
    state ={
        patients: []
    };
    componentDidMount() {
        this.getSavedPatients(param);
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    getSavedPatients= (param) => {
        API.getSavedPatients(param)
          .then(res =>
            this.setState({
              patients: res.data
            })
          )
          .catch(err => console.log(err));
      };
    
      handlePatientDelete = id => {
        API.deletePatient(id).then(res => this.getSavedPatients(param));
      };

      handlePatientEdit = id => {
          API.editPatient(id).then(res =>this.getSavedPatients())
      } 

  toggleModalCrud = (param) => {
    switch (param) {
      case "edit":
        this.setState({
          crudActive: !this.state.crudActive,
          action: (
            <CreatePatMod close={this.closeModal} type={param}></CreatePatMod>
          ),
        });
        break;
      case "create":
        this.setState({
          crudActive: !this.state.crudActive,
          action: (
            <CreatePatMod close={this.closeModal} type={param}></CreatePatMod>
          ),
        });
        break;
      case "delete":
        this.setState({
          crudActive: !this.state.crudActive,
          action: (
            <DeleteMod close={this.closeModal} name={"patient"}></DeleteMod>
          ),
        });
        break;
      case "view":
        this.setState({
          crudActive: !this.state.crudActive,
          action: (
            <ViewPatMod close={this.closeModal} type={"patient"}></ViewPatMod>
          ),
        });
        break;
      default:
        this.setState({
          crudActive: !this.state.crudActive,
          action: (
            <CreatePatMod close={this.closeModal} type={param}></CreatePatMod>
          ),
        });
        break;
    }
  };

  closeModal = () => {
    this.setState({
      crudActive: false,
    });
  };

  render() {
    return (
      <>
        <Menu />
        <div className="content flex-col flex-center">
          <div className="flex-col crud-body">
            <div className="titles">
              <h1>Patients</h1>
              <AddBtn action={this.toggleModalCrud} />
            </div>
            <PatientCRUD
              status={this.state.crudActive}
              toggle={this.toggleModalCrud}
            />
            <MyModal
              status={this.state.crudActive}
              toggle={this.toggleModalCrud}
              type={this.state.action}
              close={this.closeModal}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Patients; */

/* 





function Patients(){


    return(
        < >
        <Menu/>

        <div className="content flex-col">
        
        <div className="flex-col flex-center">
        <h1>Patients</h1>
        <AddBtn/>
        <PatientCRUD/>
    
    </div>   
    
</div>    
</>


    );
}

export default Patients; */
