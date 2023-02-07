import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../lyouts/Navbar/Navbar";

const initials = {
  name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
};

const Register = () => {
  const [selectedImg, setSelectedImg] = useState("");
  const [image, setImage] = useState({file:null});
  const [form, setForm] = useState(initials);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(null);

  const handleImg = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImg(e.target.files[0]);
      setImage({ ...image, [e.target.name]: e.target.files[0] });
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("address", form.address);
    formData.append("password", form.password);
    formData.append("file", image.file);
    try {
      await axios
        .post("http://localhost:3001/api/auth/register", formData)
        .then((res) => {
          if (res) {
            setSuccess(res.data.message);
            setForm("");
            setError([]);
          }
        });
    } catch (err) {
      setError(err.response.data.message);
      setSuccess("");
    }
  };
  return (
    <div>
      <div className="d-flex flex-column w-100">
        <Navbar />
        <main className="container w-75 m-auto">
          <div className="w-50 m-auto ">
            <form
              className="shadow p-3 mb-5 bg-body-tertiary rounded px-5"
              encType="multipart/form-data"
              onSubmit={formSubmit}
            >
              {selectedImg ? (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(selectedImg)}
                    alt=""
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <div className="text-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt=""
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="user_name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="user_name"
                  name="name"
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                />
                {error && <span>{error.name}</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="user_email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="user_email"
                  name="email"
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="user_phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="user_phone"
                  name="phone"
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="user_address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="user_address"
                  name="address"
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="user_password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="user_password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="user_photo" className="form-label">
                  File
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="user_photo"
                  name="file"
                  onChange={handleImg}
                />
              </div>
              {error && <div className="mb-2 text-danger">{error}</div>}
              {/* {error.length > 0 && (
                <div className="error-container">
                  <ul>
                    {error.map((err, index) => (
                      <li key={index}>{err}</li>
                    ))}
                  </ul>
                </div>
              )} */}
              {success && <div className="mb-2 text-success">{success}</div>}
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <div className="mt-3">
                <span>
                  Already User?
                  <Link to="/login" className="link-primary">
                    Login
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

export default Register;
