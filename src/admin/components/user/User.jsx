import React from "react";
import Card from "../../../component/card/Card";
import Navbar from "../../../lyouts/Navbar/Navbar";
import Sidebar from "../../../lyouts/Sidebar/Sidebar";
import UserTable from "./UserTable";

const User = () => {
  return (
    <div className="d-flex w-auto">
      <div className="w-25">
        <Sidebar />
      </div>
      <div className="d-flex flex-column w-100">
        <Navbar />
        <main>
          <Card title="All Register Users" />
          <div className="p-3">
            <UserTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default User;
