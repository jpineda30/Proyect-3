import React, { Component } from "react";
import Menu from "../general/menu";
import WorkDay from "../appointments/workDay";
import Calendar from "react-calendar";
import MyModal from "../general/Modal";
import CreateMod from "../appointments/CreateMod";
import DeleteMod from "../general/DeleteMod";
import API from "../../utils/API-";

class Appointments extends Component {
  constructor() {
    super();
    this.state = {
      crudActive: false,
      action: <CreateMod close={this.closeModal}></CreateMod>,
      date: new Date(),
    };
  }

  convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split("");
    var ddChars = dd.split("");

    return (
      yyyy +
      "-" +
      (mmChars[1] ? mm : "0" + mmChars[0]) +
      "-" +
      (ddChars[1] ? dd : "0" + ddChars[0])
    );
  }

  onChange = (date) => {
    this.setState({
      date,
    });
  };

  closeModal = () => {
    this.setState({
      crudActive: false,
    });
  };

  openModal = (param) => {
    switch (param) {
      case "edit":
        this.setState({
          crudActive: true,
          action: (
            <CreateMod close={this.closeModal} name={"edition"}></CreateMod>
          ),
        });
        break;
      case "create":
        this.setState({
          crudActive: true,
          action: (
            <CreateMod
              close={this.closeModal}
              services={this.state.services}
              name="creation"
            ></CreateMod>
          ),
        });
        break;
      case "delete":
        this.setState({
          crudActive: true,
          action: (
            <DeleteMod close={this.closeModal} name={"appointment"}></DeleteMod>
          ),
        });
        break;
      default:
        this.setState({
          crudActive: true,
          action: <CreateMod close={this.closeModal}></CreateMod>,
        });
        break;
    }
  };

  render() {
    return (
      <>
        <Menu />
        <div className="flex-col scroll">
          <div className="flex-col flex-center">
            <h1>Appointments</h1>

            <div className="flex-row flex-wrap flex-jcenter">
              <WorkDay
                open={this.openModal}
                close={this.closeModal}
                date={this.state.date.toDateString()}
              ></WorkDay>
              <div className="calendar p-1 flex-col">
                {" "}
                <Calendar onChange={this.onChange} value={this.state.date} />
              </div>
              <MyModal
                status={this.state.crudActive}
                toggle={this.closeModal}
                type={this.state.action}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Appointments;
