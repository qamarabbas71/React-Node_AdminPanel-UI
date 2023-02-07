import React from "react";
import Card from "../../../component/card/Card";
import Charts from "../../../component/charts/Charts";
import Table from "../../../component/table/Table";
import Widgets from "../../../component/widgets/Widgets";
import Navbar from "../../../lyouts/Navbar/Navbar";
import Sidebar from "../../../lyouts/Sidebar/Sidebar";

const Dashboard = () => {
  const week = {
    title: "WEEK",
    sign: "$",
    content: "5000",
    badgeContent: "5.3",
    text: "Total Earnings of week",
  };
  const month = {
    title: "MONTH",
    sign: "$",
    content: "14000",
    badgeContent: "4.3",
    text: "Total Earnings of Month",
  };
  const year = {
    title: "YEAR",
    sign: "$",
    content: "25000",
    badgeContent: "4.7",
    text: "Total Earnings of years",
  };
  return (
    <div className="d-flex w-100">
      <div className="w-25">
        <Sidebar />
      </div>
      <div className="d-flex flex-column w-100">
        <Navbar />
        <main className="w-100">
          <Card title="Dashboard" />
          <div className="d-flex m-3 shadow-sm p-3 bg-body-tertiary rounded">
            <div className="d-flex flex-wrap gap-2 w-50 overflow-hidden p-1">
              <Widgets data={week} />
              <Widgets data={month} />
              <Widgets data={year} />
              <Widgets data={year} />
            </div>
            <div className="w-50 p-1">
              <Charts aspect={4 / 3}  title="Last six months (Revenue)"/>
            </div>
          </div>
          <div className="p-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <Table />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
