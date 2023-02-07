import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../component/card/Card";
import Navbar from "../../../lyouts/Navbar/Navbar";
import Sidebar from "../../../lyouts/Sidebar/Sidebar";

const ProductListing = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await axios
          .get("http://localhost:3001/api/products/getProduct")
          .then((res) => {
            setData(res.data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (pr_id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        await axios
          .delete(`http://localhost:3001/api/products/deleteProduct/${pr_id}`)
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
          <Card title="Products" />
          {/* Card Start */}
          <div className="bg-white shadow-sm p-3 bg-body-tertiary rounded m-3">
            {/* Card body Start */}
            <div className="card-body">
              {/* Card Nav Start */}
              <div className="d-flex justify-content-between align-items-center p-1 w-100">
              <div className="d-flex justify-content-between align-items-center text-muted">
                  <h3>All Products</h3>
                </div>
                <div>
                  <Link to="/admin/product/add-product">
                    <button className="btn btn-primary">Add Product</button>
                  </Link>
                </div>
              </div>
              {/* Card Nav End */}
              {/* Card Table Start */}
              <table className="table p-3 my-4">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Categories</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="justify-content-between align-items-center">
                  {data.map((d, index) => {
                    return (
                      <tr key={index}>
                        <td className="border align-items-center py-3">
                          <span>{d.pr_id}</span>
                        </td>
                        <td className="border align-items-center">
                          <span className="d-flex align-items-center gap-2">
                            <img
                              src={`http://localhost:3001/products/${d.pr_image}`}
                              alt=""
                              style={{
                                height: "50px",
                                width: "40px",
                                borderRadius: "7px",
                              }}
                              className="d-flex align-items-center"
                            />
                          </span>
                        </td>
                        <td className="border align-items-center py-3">
                          <span>{d.pr_name}</span>
                        </td>
                        <td className="border align-items-center py-3">
                          <span>{d.pr_catogary}</span>
                        </td>
                        <td className="border align-items-center py-3">
                          {d.pr_stock === "In Stock" ? (
                            <span className="badge bg-success">
                              {d.pr_stock}
                            </span>
                          ) : (
                            <span className="badge bg-warning">
                              {d.pr_stock}
                            </span>
                          )}
                        </td>
                        <td className="border align-items-center py-3">
                          <span>
                          {d.pr_quantaty }
                          </span>
                        </td>
                        <td className="border align-items-center py-3">
                          <span>
                            ${d.pr_price}
                          </span>
                        </td>
                        <td className="border align-items-center py-3">
                          <span className="">
                            <button className="btn btn-sm btn-success me-2">
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(d.pr_id)}
                            >
                              Delete
                            </button>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                  {/* <tr>
                    <td>Image</td>
                    <td>ID</td>
                    <td>Product Name</td>
                    <td>Categories</td>
                    <td>Stock</td>
                    <td>Price</td>
                    <td>Action</td>
                  </tr> */}
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

export default ProductListing;
