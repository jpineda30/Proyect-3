import React from "react";
import { Link, useLocation } from "react-router-dom";


function Menu(){

    const location = useLocation();

    return(
        <header className="flex-row flex-center menu">
      <Link to="/" className={location.pathname === "/"  ? "fas fa-home fa-2x" : "fas fa-home fa-2x"}></Link>
      <Link to="/appointments" className={location.pathname === "/appointments"  ? "fas fa-calendar-week fa-2x" : "fas fa-calendar-week fa-2x"}></Link>
      <Link to="/patients" className={location.pathname === "/patients"  ? "fas fa-address-book fa-2x" : "fas fa-address-book fa-2x"}></Link>
      <Link to="/services" className={location.pathname === "/services"  ? "fas fa-store-alt fa-2x" : "fas fa-store-alt fa-2x"}></Link>
       
    </header>
    );
}

export default Menu;