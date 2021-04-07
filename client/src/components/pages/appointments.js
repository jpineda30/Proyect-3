import React, { Component } from "react";
import Menu from "../general/menu";
import WorkDay from "../appointments/workDay";
import Calendar from "react-calendar";
import MyModal from "../general/Modal";
import CreateMod from "../appointments/CreateMod";
import DeleteMod from "../general/DeleteMod";
import API from "../../utils/API-";
import moment from "moment";
import Message from "../general/message";

class Appointments extends Component {
  constructor() {
    super();
    this.state = {
      crudActive: false,
      action: <CreateMod close={this.closeModal}></CreateMod>,
      date: new Date(),
      slots: [],
      messageState: false,
      message: <Message />,
    };
  }

  componentDidMount() {
    let formatCalendarDate = moment.utc(this.state.date).format("L");
    this.loadDates();
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

  onChange = async (date) => {
    await this.setState({
      date,
    });

    this.loadDates();
  };

  closeModal = () => {
    this.setState({
      crudActive: false,
    });
  };

  validateDate = (start, end) => {
    let i = 0;
    let error = false;

    for (i = 0; i < this.state.slots.length; i++) {
      if (
        start.isBefore(moment(this.state.slots[i].startT, "h:mma")) &&
        end.isBefore(moment(this.state.slots[i].startT, "h:mma"))
      ) {
      } else {
        if (end.isSame(moment(this.state.slots[i].startT, "h:mma"))) {
        } else {
          if (
            start.isAfter(moment(this.state.slots[i].endT, "h:mma")) &&
            end.isAfter(moment(this.state.slots[i].endT, "h:mma"))
          ) {
            console.log("2");
          } else {
            if (start.isSame(moment(this.state.slots[i].endT, "h:mma"))) {
            } else {
              error = true;
            }
          }
        }
      }
    }

    return error;
  };

  openModal = (param, day) => {
    switch (param) {
      case "edit":
        this.setState({
          crudActive: true,
          action: (
            <CreateMod
              message={this.sendMessage}
              close={this.closeModal}
              name={"edition"}
              info={day}
              day={this.state.date}
              reload={this.loadDates}
              change={this.onChange}
              validate={this.validateDate}
            ></CreateMod>
          ),
        });
        break;
      case "create":
        this.setState({
          crudActive: true,
          action: (
            <CreateMod
              message={this.sendMessage}
              close={this.closeModal}
              name="creation"
              day={this.state.date}
              reload={this.loadDates}
              validate={this.validateDate}
            ></CreateMod>
          ),
        });
        break;
      case "delete":
        this.setState({
          crudActive: true,
          action: (
            <DeleteMod
              message={this.sendMessage}
              reload={this.loadDates}
              close={this.closeModal}
              name={"appointment"}
              ide={day}
            ></DeleteMod>
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

  loadDates = async () => {
    let formatCalendarDate = moment.utc(this.state.date).format("L");

    let pack = { day: formatCalendarDate };

    let res = API.getAppointmentsByDate(pack)
      .then((res) => {
        this.setState({
          //Luego cambiar esto para tomar en cuenta multiples
          //serviceios
          slots: res.data,
        });
        console.log(this.state.slots);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  sendMessage = (type, text) => {
    this.setState({
      message: (
        <Message on={true} type={type} text={text} timer={this.closeMessage} />
      ),
      messageState: true,
    });
  };

  closeMessage = () => {
    this.setState({ message: <Message />, messageState: false });
    clearTimeout();
  };

  render() {
    return (
      <>
        <Menu />
        <div className="flex-col content flex-acenter">
          <div className="flex-col flex-center">
            <h1>Appointments</h1>

            <div className="flex-row flex-wrap flex-jcenter">
              <WorkDay
                open={this.openModal}
                close={this.closeModal}
                date={this.state.date.toDateString()}
                slots={this.state.slots}
                message={this.sendMessage}
              ></WorkDay>
              <div className="calendar p-1 flex-col">
                {" "}
                <Calendar onChange={this.onChange} value={this.state.date} />
              </div>
              <MyModal
                status={this.state.crudActive}
                toggle={this.closeModal}
                type={this.state.action}
                message={this.sendMessage}
              />
            </div>
          </div>
        </div>
        {this.state.message}
      </>
    );
  }
}

export default Appointments;
