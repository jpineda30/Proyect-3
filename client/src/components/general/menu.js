import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStoreContext } from "../../utils/globalState";


function Menu(){

    const {logout} = useStoreContext();

    const location = useLocation();

    

    return(
        <header className="flex-row flex-center menu">
      <Link to="/" className={location.pathname === "/"  ? "fas fa-home fa-2x" : "fas fa-home fa-2x"}></Link>
      <Link to="/appointments" className={location.pathname === "/appointments"  ? "fas fa-calendar-week fa-2x" : "fas fa-calendar-week fa-2x"}></Link>
      <Link to="/patients" className={location.pathname === "/patients"  ? "fas fa-address-book fa-2x" : "fas fa-address-book fa-2x"}></Link>
      <Link to="/services" className={location.pathname === "/services"  ? "fas fa-store-alt fa-2x" : "fas fa-store-alt fa-2x"}></Link>
      <a className="fas fa-door-closed fa-2x" onClick={logout}/>
       
    </header>
    );
}

export default Menu;