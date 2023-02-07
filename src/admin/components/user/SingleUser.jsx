import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Card from "../../../component/card/Card";
import Navbar from "../../../lyouts/Navbar/Navbar";
import Sidebar from "../../../lyouts/Sidebar/Sidebar";
import OrderTable from "../order/OrderTable";

const SingleUser = () => {
  const [data, setData] = useState({});

  const location = useLocation();
  const id = location.pathname.split("/")[4];

  useEffect(() => {
    const fetchSingleUser = async () => {
      await axios
        .get(`http://localhost:3001/api/user/singleUser/${id}`)
        .then((res) => {
          setData(res.data);
        });
    };
    fetchSingleUser();
  }, [id]);
  return (
    <div className="d-flex w-auto">
      <div className="w-25">
        <Sidebar />
      </div>
      <div className="d-flex flex-column w-100">
        <Navbar />
        <main className="">
          <Card title="Single User" />
          <div className="p-3">
            <div className="container bg-white shadow-sm bg-body-tertiary rounded">
              <h3 className="text-muted fw-bold p-1">User Details</h3>
              {Object.values(data).map((file, index) => {
                return (
                  <div className="d-flex gap-2" key={index}>
                    {/* left-side */}
                    <div className="w-50 py-5">
                      <div className="text-center">
                        <img
                          src={`http://localhost:3001/upload/${file.file}`}
                          alt="img"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </div>
                    {/* right-side */}
                    <div className="w-50 border-bottom w-50">
                      <div className="my-4 d-flex flex-column justify-content-center">
                        <div className="mb-3 border-bottom w-50">
                          ID:{" "}
                          <span className="fw-bolder ms-3">{file.id}</span>
                        </div>
                        <div className="mb-3 border-bottom w-50">
                          Name:{" "}
                          <span className="fw-bolder ms-3">{file.name}</span>
                        </div>
                        <div className="mb-3 border-bottom w-50">
                          Email:{" "}
                          <span className="fw-bolder ms-3">{file.email}</span>
                        </div>
                        <div className="mb-3 border-bottom w-50">
                          Phone:{" "}
                          <span className="fw-bolder ms-3">{file.phone}</span>
                        </div>
                        <div className="mb-3 border-bottom w-50">
                          Address:{" "}
                          <span className="fw-bolder ms-3">{file.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
            <OrderTable/>
        </main>
      </div>
    </div>
  );
};

export default SingleUser;
