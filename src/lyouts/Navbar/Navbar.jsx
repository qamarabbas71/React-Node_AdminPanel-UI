import React, { useContext, useState } from "react";
import "../lyout.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
} from "reactstrap";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
       await logout();
       localStorage.clear("user")
      alert("User logged out successfully");
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      window.location.reload();
    }
    
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2 stickyTop">
      <div className="container-fluid">
        <Link to="" className="navbar-brand" >
          MORGAN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex align-center ">
            <Nav className=" d-flex justify-content-end">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                  {currentUser ? (
                    <img
                      src={`http://localhost:3001/upload/${currentUser.file}`}
                      alt="user"
                      className=""
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="user"
                      className=""
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </DropdownToggle>
                {currentUser && (
                  <span className="text-white mx-2">{currentUser.name}</span>
                )}
                {currentUser ?
                <DropdownMenu>
                <Link to={`/admin/user/single/${currentUser.id}`}>
                  <DropdownItem>Profile</DropdownItem>
                  </Link>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                </DropdownMenu>:
                <DropdownMenu>
                <Link to={`/login`}>
                  <DropdownItem>Login</DropdownItem>
                  </Link>
                </DropdownMenu>
                }
              </Dropdown>
            </Nav>
            {/* <span className="text-white justify-content-center text-center">John Doe</span> */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
