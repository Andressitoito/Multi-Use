import React from "react";

import './Navbar.scss'

const Navbar = () => {

 const links = [
  {
   id: 1,
   label: "About",
   icon: "fa-solid fa-circle-info"
  },
  {
   id: 2,
   label: "Contact",
   icon: "fa-solid fa-envelope"
  },
  {
   id: 3,
   label: "Account",
   icon: "fa-solid fa-user"
  }
 ]

 return (
  <nav>
   <div className="links">

    {links.map(link => <a href="www.google.com" key={link.id}> <i className={link.label}></i>{link.label}</a>)}
   </div>

  </nav >
 )
}

export { Navbar };