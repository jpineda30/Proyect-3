import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Patients from "./components/pages/patients";
import Services from "./components/pages/services";
import Appointments from "./components/pages/appointments";
import './App.css';
import { StoreProvider, useStoreContext } from "./utils/globalState";




function App() {


  const {isLogged} = useStoreContext();
  
  
  const main=() => <Home userState={isLogged}/>;
  
  function validation(object)
  { 
    let redirection = object;

      console.log("validation " + isLogged);

      if(isLogged == false)
      { 
          redirection = main;
      }
      
    return redirection;
  }

 

  return (
    <div className="flex-col flex-acenter fh">
     <StoreProvider>
       <Router> 
        
            <Switch>      

                <Route exact path="/" component={main}/>
                <Route exact path="/home" component={main}/>
                <Route exact path="/services" component={validation(Services)} />
                <Route exact path="/appointments" component={validation(Appointments)} />
                <Route exact path="/patients" component={validation(Patients)} />

            </Switch>
         
            
         
      </Router>
      </StoreProvider>
     
    </div>
  );
}

export default App;
