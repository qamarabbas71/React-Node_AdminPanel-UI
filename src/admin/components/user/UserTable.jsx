import axios from "axios";
import React, { useEffect, useState } from "react";

const UserTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await axios.get("http://localhost:3001/api/user/user").then((res) => {
          setData(res.data.data);
        });
      } catch (error) {}
    };
    fetchUsers();
  }, []);
  return (
    <div className="container bg-white shadow p-3 mb-5 bg-body-tertiary rounded">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Photo</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((file, index) => {
            return (
              <tr key={index}>
                <th scope="row" className="border">{Math.floor(Math.random() * (99 - 10 + 1) + 10)}</th>
                <td className="border">{file.name}</td>
                <td className="border">{file.email}</td>
                <td className="border">{file.phone}</td>
                <td className="border">{file.address}</td>
                <td className="border">
                  <img
                    src={`http://localhost:3001/upload/${file.file}`}
                    // src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt={file.name}
                    className=""
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
