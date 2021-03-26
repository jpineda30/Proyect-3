import React, { useState, useEffect } from "react";
import Menu from "../general/menu";
import AddBtn from "../general/AddBtn";
import ServiceCRUD from "../services/serviceCRUD";
import CreateMod from "../services/CreateMod";
import DeleteMod from "../general/DeleteMod";
import MyModal from "../general/Modal";
import API from "../../utils/API";

function Services() {
  const closeModal = () => {
    setCRUDActive(false);
  };

  const addService = (service) => {
    setServices([...services, service]);
  };

  const [services, setServices] = useState([]);
  const [action, setAction] = useState(
    <CreateMod close={closeModal}></CreateMod>
  );
  const [crudActive, setCRUDActive] = useState(false);

  useEffect(() => {
    //Modal.setAppElement("CreateMod");
    //Load Services
    API.getServices().then((res) => {
      setServices(res.data);
    });
  }, []);
  const toggleModalCrud = (param, id) => {
    switch (param) {
      case "delete":
        setCRUDActive(!crudActive);
        setAction(
          <DeleteMod close={closeModal} name={"service"} ide={id}></DeleteMod>
        );
        break;
      default:
        setCRUDActive(!crudActive);
        setAction(
          <CreateMod
            close={closeModal}
            type={param}
            addService={addService}
            ide={id}
          ></CreateMod>
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
            <h1>Services</h1>
            <AddBtn action={toggleModalCrud} />
          </div>
          <ServiceCRUD
            status={crudActive}
            toggle={toggleModalCrud}
            services={services}
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

// class Services extends Component{

//     constructor(){
//         super()
//         this.state= {
//             crudActive:false,
//             action:<CreateMod close={this.closeModal}></CreateMod>,
//             services:[]
//         }
//     }

//     componentWillMount(){
//         //Modal.setAppElement("CreateMod");
//         //Load Services
//         API.getServices().then(res=> {

//             this.setState({services:res.data});
//             //*May not return all the services.
//             console.log(this.state.services);
//         });
//     }

//     toggleModalCrud= (param)=>{

//         switch (param) {
//             case "edit":
//                 this.setState({
//                     crudActive:!this.state.crudActive,
//                     action: <CreateMod close={this.closeModal} type={param}></CreateMod>
//                 })
//                 break;
//              case "create":
//                 this.setState({
//                     crudActive:!this.state.crudActive,
//                     action: <CreateMod close={this.closeModal} type={param}></CreateMod>
//                 })
//                 break;
//                 case "delete":
//                     this.setState({
//                         crudActive:!this.state.crudActive,
//                         action: <DeleteMod close={this.closeModal} name={"service"}></DeleteMod>
//                     })
//                     break;
//                   default:

//                         this.setState({
//                             crudActive:!this.state.crudActive,
//                             action: <CreateMod close={this.closeModal} type={param}></CreateMod>
//                         })
//                         break;
//         }

//     }

//     closeModal = ()=>{
//         this.setState({
//             crudActive:false,

//         })
//     }

//     getServices = ()=>{

//     }

//    render(){

//        return <>
//        <Menu/>
//         <div className="content flex-col flex-center">

//        <div className="flex-col crud-body">

//            <div className="titles">
//                <h1>Services</h1>
//                <AddBtn action={this.toggleModalCrud}/>

//            </div>
//            <ServiceCRUD status ={this.state.crudActive} toggle={this.toggleModalCrud} services = {this.state.services} />
//            <MyModal status ={this.state.crudActive} toggle={this.toggleModalCrud} type={this.state.action} close={this.closeModal}/>

//    </div>

// </div>

// </>

//    }
// }

export default Services;
