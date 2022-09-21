import { useState } from 'react';
import { SignUpModal, LoginModal } from './index.js';
import { Layout } from './Layout/Layout';
import './NavBarLogin.scss'

const NavBarLogin = () => {

 const [openSignUp, setOpenSignUp] = useState(false);
 const handleOpenSignUp = () => setOpenSignUp(true);
 const handleCloseSignUp = () => setOpenSignUp(false);

 const [openLogin, setOpenLogin] = useState(false);
 const handleOpenLogin = () => setOpenLogin(true);
 const handleCloseLogin = () => setOpenLogin(false);


 return (
  <Layout
   handleOpenSignUp={handleOpenSignUp}
   handleOpenLogin={handleOpenLogin}
  >

   <SignUpModal
    openSignUp={openSignUp}
    handleCloseSignUp={handleCloseSignUp}
   />

   {<LoginModal
    openLogin={openLogin}
    handleCloseLogin={handleCloseLogin}
   />}

  </Layout>
 )
}

export { NavBarLogin };