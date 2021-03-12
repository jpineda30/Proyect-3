import Menu from "./components/general/menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Patients from "./components/pages/patients";
import Services from "./components/pages/services";
import Appointments from "./components/pages/appointments";
import './App.css';

function App() {
  return (
    <div className="flex-col flex-acenter fh">
       <Router>
          
            <Menu />
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/patients" component={Patients} />
            
            
         
      </Router>
    </div>
  );
}

export default App;
