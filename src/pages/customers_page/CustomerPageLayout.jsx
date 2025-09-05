import React from "react";
import CustomNavbar from "../../components/custom_navbar/CustomNavbar";
import { Outlet } from "react-router-dom";
import Footer from "./home_page/sub_components/footer/Footer";

function CustomerPageLayout() {
  return (
    <div>
      <CustomNavbar />
      <div style={{minHeight:'80vh',backgroundColor:"#fffaf5",marginTop:"80px"}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default CustomerPageLayout;
