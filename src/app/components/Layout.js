"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
 
  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
