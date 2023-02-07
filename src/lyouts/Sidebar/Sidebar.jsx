import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import logo2 from '../../admin/assets/logo2.png';
import "../lyout.css";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-dark sticky-top scrollY" style={{ height: "100vh"}}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50px" }}>
      <Link to="/" className="d-flex justify-content-center align-items-center pt-4">
        <span className="d-flex justify-content-center align-items-center">
         <img src={logo2} alt="" style={{height:"40px", width:"200px",marginTop:"10px",color:"white"}}/>
        </span>
        </Link>
      </div>
      <hr style={{ border: "1px solid white", marginTop: "20px" }} />
      <div className="d-flex flex-column">
        <span className="text-muted ms-4 fw-bold fsize">MAIN</span>
        <li>
            <NavLink to="/admin/dashboard" className="text-white d-flex ps-3 gap-2 my-2  dflex">
                <DashboardIcon className="icons" /> Dashboard
            </NavLink>
        </li>
      </div>
      <div className="d-flex flex-column mb-2">
        <span className="text-muted ms-4 fw-bold fsize">NEW</span>
        <li>
          <NavLink to="/admin/user" className="text-white d-flex ps-3 gap-2 mt-2 dflex">
            <PersonOutlineOutlinedIcon className="icons" /> User
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/product" className="text-white d-flex ps-3 gap-2 mt-2 dflex">
            <Inventory2OutlinedIcon className="icons" /> Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/order-list" className="text-white d-flex ps-3 gap-2 mt-2 dflex">
            <LocalShippingOutlinedIcon className="icons" /> Order
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/table" className="text-white d-flex ps-3 gap-2 mt-2 dflex">
            <TableViewOutlinedIcon className="icons" /> Table
          </NavLink>
        </li>
      </div>
      <div className="d-flex flex-column mb-2">
        <span className="text-muted ms-4 fw-bold fsize">USEFULL</span>
        <li>
          <span className="text-white d-flex ps-3 gap-2 mt-2 dflex">
            <PersonOutlineOutlinedIcon className="icons" /> User
          </span>
        </li>
        <li>
          <span className="text-white d-flex ps-3 gap-2 mt-2 dflex">
            <Inventory2OutlinedIcon className="icons" /> Products
          </span>
        </li>
        <li>
          <span className="text-white d-flex ps-3 gap-2 mt-2 dflex">
            <LocalShippingOutlinedIcon className="icons" /> Order
          </span>
        </li>
      </div>
      <div className="d-flex flex-column mb-2">
        <span className="text-muted ms-4 fw-bold fsize">ACCOUNT</span>
        <li>
          <span className="text-white d-flex ps-3 gap-2 mt-2 dflex">
            <AccountCircleOutlinedIcon className="icons" /> Profile
          </span>
        </li>
        <li>
          <span className="text-white d-flex ps-3 gap-2 mt-1 dflex">
            <SettingsOutlinedIcon className="icons" /> Settings
          </span>
        </li>
        <li>
          <span className="text-white d-flex ps-3 gap-2 mt-1 dflex">
            <ExitToAppOutlinedIcon className="icons" /> Logout
          </span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
