import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../component/card/Card";
import Navbar from "../../../lyouts/Navbar/Navbar";
import Sidebar from "../../../lyouts/Sidebar/Sidebar";

const OrderListing = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await axios
          .get("http://localhost:3001/api/product/get-product")
          .then((res) => {
            setData(res.data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (p_id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        await axios
          .delete(`http://localhost:3001/api/product/delete-product/${p_id}`)
          .then((res) => {
            alert(res.data.message);
          });
      } catch (error) {
        console.log(error);
      } finally {
        window.location.reload();
      }
    } else {
      alert("Your data is safe.");
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
          <Card title="Order" />
          {/* Card Start */}
          <div className="bg-white shadow-sm p-3 bg-body-tertiary rounded m-3">
            {/* Card body Start */}
            <div className="card-body">
              {/* Card Nav Start */}
              <div className="d-flex justify-content-between align-items-center p-1 w-100">
              <div className="d-flex justify-content-between align-items-center text-muted">
                  <h3>All Orders</h3>
                </div>
                <div>
                  <Link to="/admin/order-list/add-order">
                    <button className="btn btn-primary">Add Order</button>
                  </Link>
                </div>
              </div>
              {/* Card Nav End */}
              {/* Card Table Start */}
              <table className="table p-3 my-4">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product</th>
                    <th scope="col">Discription</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="justify-content-between align-items-center">
                  {data.map((d, index) => {
                    return (
                      <tr key={index}>
                        <td className="border align-items-center py-3">
                          <span>{d.p_id}</span>
                        </td>
                        <td className="border align-items-center">
                          <span className="d-flex align-items-center gap-2">
                            <img
                              src={`http://localhost:3001/product/${d.p_image}`}
                              alt=""
                              style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "7px",
                              }}
                              className="d-flex align-items-center"
                            />
                            <span>{d.p_name}</span>
                          </span>
                        </td>
                        <td className="border align-items-center py-3">
                          <span>{d.p_disc}</span>
                        </td>
                        <td className="border align-items-center py-3">
                          <span>{d.name}</span>
                        </td>
                        <td className="border align-items-center py-3">
                          {d.p_status === "Deliever" ? (
                            <span className="badge bg-success">
                              {d.p_status}
                            </span>
                          ) : (
                            <span className="badge bg-warning">
                              {d.p_status}
                            </span>
                          )}
                        </td>
                        <td className="border align-items-center py-3">
                          <span>
                            {d.p_price_unit} {d.p_price}
                          </span>
                        </td>
                        <td className="border align-items-center py-3">
                          <span className="">
                            <button className="btn btn-sm btn-success me-2">
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(d.p_id)}
                            >
                              Delete
                            </button>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* Card Table End */}
            </div>
            {/* Card body end */}
          </div>
          {/* Card End */}
        </main>
      </div>
    </div>
  );
};

export default OrderListing;
