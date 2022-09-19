import React from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import './Layout.scss'

const Layout = ({ children }) => {
 return (
  <div className="Layout">
   <Navbar />
   {children}
   <Footer />
  </div>
 )
}

export { Layout };