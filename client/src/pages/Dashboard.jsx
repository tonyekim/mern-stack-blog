import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import { set } from "mongoose";
import DashPost from "../components/DashPost";

const Dashboard = () => {
  const location = useLocation();

  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    console.log(tabFormUrl);
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location]);

  return (
    <div className=" min-h-screen flex flex-col md:flex-row">
      {/* sidebar */}

      <div className=" md:w-56">
      <DashSidebar />
      </div>

      {tab === "profile" && <DashProfile />}
      {tab === "posts" && <DashPost />}
    </div>
  );
};

export default Dashboard;
