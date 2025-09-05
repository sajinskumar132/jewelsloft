import React from "react";
import HomePage from "../pages/customers_page/home_page/HomePage";

function PublicRoutes() {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </>
  );
}

export default PublicRoutes;
