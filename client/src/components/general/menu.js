import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStoreContext } from "../../utils/globalState";

function Menu() {
  const { logout } = useStoreContext();

  const location = useLocation();

  return (
    <header className="flex-row flex-center menu">
      <Link to="/" className="flex-col flex-center menu-b">
        <i className="fas fa-user fa-2x" />
        <label className="menu-title">User</label>
      </Link>

      <Link to="/appointments" className="flex-col flex-center menu-b">
        <i className="fas fa-calendar-week fa-2x" />
        <label className="menu-title">Schedule</label>
      </Link>

      <Link to="/patients" className="flex-col flex-center menu-b">
        <i className="fas fa-address-book fa-2x" />
        <label className="menu-title">Patients</label>
      </Link>

      <Link to="/services" className="flex-col flex-center menu-b">
        <i className="fas fa-store-alt fa-2x" />
        <label className="menu-title">Services</label>
      </Link>

      <a className="flex-col flex-center menu-b" onClick={logout}>
        <i className="fas fa-door-closed out" />
        <label className="menu-title">Log out</label>
      </a>
    </header>
  );
}

export default Menu;
