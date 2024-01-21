import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const DashSidebar = () => {

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
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Link to='/dashboard?tab=profile' >
           
          <Sidebar.Item 
          active={tab === 'profile'} 
          icon={HiUser} 
          label={"User"} 
          labelColor="dark"
          >
         
            Profile
          </Sidebar.Item>

          </Link>
          <Sidebar.Item className=' cursor-pointer' icon={HiArrowSmRight} labelColor="dark">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
