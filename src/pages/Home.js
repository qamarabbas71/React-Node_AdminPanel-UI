import React from "react";
import Card from "../component/card/Card";
import Charts from "../component/charts/Charts";
// import Table from "../component/table/Table";
import Navbar from "../lyouts/Navbar/Navbar";
import Sidebar from "../lyouts/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="d-flex w-auto">
      <div className="w-25">
        <Sidebar />
      </div>
      <div className="d-flex flex-column w-100">
        <Navbar />
        <main className="overflow-y-scroll">
        <Card title="Home" />
        <div className="gap-3 p-3">
            <Charts aspect={3 / 1} title="Last six months (Revenue)" />
          </div>
        <div className="p-3">
            {/* <Table /> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
