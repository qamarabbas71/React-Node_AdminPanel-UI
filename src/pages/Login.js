import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../lyouts/Navbar/Navbar";
const initials = {
  email: "",
  password: "",
};
const Login = () => {
  const [form, setForm] = useState(initials);
  const [error, setError] = useState([]);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(form);
      navigate("/admin/dashboard")
    } catch (err) {
      setError(err.response.data.message);
    }finally{
    }
  };
  return (
    <div>
      <div className="d-flex flex-column w-100 ">
        <div className="">
          <Navbar />
        </div>
        <main className="container w-75 m-auto p-5">
          <div className="w-75 m-auto p-5">
            <form
              className="shadow p-3 mb-5 bg-body-tertiary rounded p-5 w-75 m-auto"
              // onSubmit={formSubmit}
            >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={handleChange}
                  name="password"
                />
              </div>
              {error && <div className="mb-2 text-danger">{error}</div>}

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
              <div className="mt-4">
                <span>
                  Not Register?
                  <Link to="/register" className="link-primary">
                    Register
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
