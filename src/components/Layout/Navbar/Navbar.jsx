import React from "react";

import './Navbar.scss'

import {IoIosCloud, IoIosHome, IoIosMailOpen} from "react-icons/io";

const Navbar = () => {

 const links = [
  {
   id: 1,
   label: "About",
   icon: <IoIosCloud/>
  },
  {
   id: 2,
   label: "Contact",
   icon: <IoIosHome/>
  },
  {
   id: 3,
   label: "Account",
   icon: <IoIosMailOpen/>
  }
 ]

 return (
  <nav>
   <div className="links">

    {links.map(link => <a href="www.google.com" key={link.id}>{link.icon} {link.label}</a>)}
   </div>

  </nav >
 )
}

export { Navbar };