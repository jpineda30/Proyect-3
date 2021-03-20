import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Wrapper from "./components/general/wrapper"
import './App.css';
import { StoreProvider, useStoreContext } from "./utils/globalState";




function App() {


  const {isLogged} = useStoreContext();
  
  
  const main=() => <Home userState={isLogged}/>;
  
  

 

  return (
    <div className="flex-col flex-acenter fh">
     <StoreProvider>
        <Wrapper isLogged={isLogged}/>
      </StoreProvider>
     
    </div>
  );
}

export default App;
