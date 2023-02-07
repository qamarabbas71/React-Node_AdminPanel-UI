import React, { useState } from "react";
import Card from "../../../component/card/Card";
import Navbar from "../../../lyouts/Navbar/Navbar";
import Sidebar from "../../../lyouts/Sidebar/Sidebar";
import "./Order.css";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import axios from "axios";

const initalize = {
  pr_name: "",
  pr_disc: "",
  pr_status: "",
  pr_price: 0.0,
  pr_price_unit: "$",
};

const AddOrder = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [image, setImage] = useState({ pr_image: null });
  const [form, setForm] = useState(initalize);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(null);


  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setImage({ ...image, [e.target.name]: e.target.files[0] });
    }
  };

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pr_image", image.pr_image);
    formData.append("pr_name", form.pr_name);
    formData.append("pr_disc", form.pr_disc);
    formData.append("pr_status", form.pr_status);
    formData.append("pr_price_unit", form.pr_price_unit);
    formData.append("pr_price", form.pr_price);
    try {
      await axios
        .post("http://localhost:3001/api/product/add-product", formData, {
          withCredentials: true,
        })
        .then((res) => {
            setSuccess(res.data.message);
            setForm(initalize);
            setSelectedImage(null)
            setError([]);
        });
    } catch (error) {
      setError(error.response.data.message);
      setSuccess("");
    }
  };

  return (
    <div className="d-flex w-auto">
      <div className="w-25">
        <Sidebar />
      </div>
      <div className="d-flex flex-column w-100">
        <Navbar />
        <main>
          <Card title="Add Products" />
          <div className="container w-100 d-flex">
            {/* form start */}
            <form className="w-100 d-flex">
              <div className="m-5 w-25">
                {/* left card start */}
                <div className="bg-white shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                  <div className="card-body">
                    <div>
                      <div className="fw-bold fs-5 p-2 mb-2">Thumbnail</div>
                      <div className="text-center position-relative">
                        {selectedImage ? (
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Thumbnail"
                            
                            className="shadow mb-5 bg-body-tertiary rounded"
                            style={{ width: "130px", height: "150px" }}
                          />
                        ) : (
                          <img
                            src="https://2.bp.blogspot.com/-muVbmju-gkA/Vir94NirTeI/AAAAAAAAT9c/VoHzHZzQmR4/s1600/placeholder-image.jpg"
                            alt="Thumbnail"
                            className="shadow mb-5 bg-body-tertiary rounded"
                            style={{ width: "130px", height: "150px" }}
                          />
                        )}
                        <div className="filepiker">
                          <label
                            htmlFor="filepiker"
                            className="lableFile cursor-pointer"
                          >
                            <CreateOutlinedIcon className="shadow bg-body-tertiary rounded" />
                          </label>
                          <input
                            type="file"
                            id="filepiker"
                            name="pr_image"
                            onChange={imageChange}
                            style={{ display: "none" }}
                          />
                        </div>
                        <div className="text-muted mb-3">
                          Image should be JPG, PNG etc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* left card end */}
                {/* Second Left Card Start */}
                <div className="bg-white shadow-sm p-3 mb-5 bg-body-tertiary rounded mt-5">
                  <div className="card-body">
                    <div>
                      <div className="fw-bold fs-5 p-2 mb-2">
                        Product Status
                      </div>
                      <div className="text-center position-relative">
                        <div className="my-3">
                          <select
                            className="form-select form-select-sm mb-3"
                            aria-label=".form-select-lg example"
                            onChange={handleFormChange}
                            name="pr_status"
                            value={form.pr_status}
                          >
                            <option defaultValue></option>
                            <option value="Pending">Pending</option>
                            <option value="Deliever">Deliever</option>
                          </select>
                        </div>
                        <div className="text-muted mb-3">
                          Status should be Pending*, Deliever*.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second Left Card end */}
              </div>
              {/* right card start */}
              <div className="my-5 me-5 w-75">
                <div className="bg-white shadow-sm p-3 mb-5 bg-body-tertiary rounded mb-4">
                  <div className="card-body">
                    {/* Form Start */}
                    <div className="text-muted mb-3 fw-bold fs-3">
                      <h2>Form Detail</h2>
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-12">
                        <label
                          htmlFor="productname"
                          className="form-label fw-bold"
                        >
                          Product Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg mb-2"
                          id="productname"
                          onChange={handleFormChange}
                          name="pr_name"
                          value={form.pr_name}
                          placeholder="Product name..."
                        />
                        <span className="text-muted fs-7 mt-3">
                          A product name is required and recommended to be
                          unique.
                        </span>
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="productdiscription"
                          className="form-label fw-bold"
                        >
                          Product Discription
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          placeholder="Add discription for product"
                          id="productdiscription"
                          onChange={handleFormChange}
                          name="pr_disc"
                          value={form.pr_disc}
                        ></textarea>
                        <span className="text-muted fs-7 mt-3">
                          Set a description to the product for better
                          visibility.
                        </span>
                      </div>
                    </div>
                    {/* Form end */}
                  </div>
                </div>
                {/* second right card start */}
                <div className="bg-white shadow-sm p-3 mb-5 bg-body-tertiary rounded mb-4">
                  <div className="card-body">
                    {/* Form Start */}
                    <div className="row g-3">
                      <div className="col-12">
                        <label
                          htmlFor="productprice"
                          className="form-label fw-bold"
                        >
                          Price Unit
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg mb-2"
                          id="productprice"
                          onChange={handleFormChange}
                          name="pr_price_unit"
                          value={form.pr_price_unit}
                        />
                        <span className="text-muted fs-7 mt-3">
                          A product Price Unit is required
                          ($,dollar,€,euro,£,pound).
                        </span>
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="productbaseprice"
                          className="form-label fw-bold"
                        >
                          Base Price
                        </label>
                        <input
                          type="number"
                          className="form-control form-control-lg mb-2"
                          id="productbaseprice"
                          onChange={handleFormChange}
                          name="pr_price"
                          value={form.pr_price}
                        />
                        <span className="text-muted fs-7 mt-3">
                          Set the product price.
                        </span>
                      </div>
                      <div className="col-12">
                        {error && (
                          <div className="mb-2 text-danger">{error}</div>
                        )}
                        {success && (
                          <div className="mb-2 text-success">{success}</div>
                        )}

                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={formSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    {/* Form end */}
                  </div>
                </div>
                {/* second right card end */}
              </div>

              {/* right card end */}
            </form>
            {/* form end */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddOrder;
