import { Button } from '@mui/material';
import { useState } from 'react';
import { SignUpModal, LoginModal } from './index.js';
import { Layout } from './Layout/Layout';
import './NavBarLogin.scss'

const NavBarLogin = () => {

 const [open, setOpenSignUp] = useState(false);
 const handleOpenSignUp = () => setOpenSignUp(true);
 const handleCloseSignUp = () => setOpenSignUp(false);

 // const [openLogin, setOpenLogin] = useState(false);
 // const handleOpenLogin = () => setOpenLogin(true);
 // const handleCloseLogin = () => setOpenLogin(false);


 return (
  <Layout
   handleOpenSignUp={handleOpenSignUp}
  // handleOpenLogin={handleOpenLogin}
  >

   <Button
    variant='contained'
    color='error'
    onClick={handleOpenSignUp}>Cancel</Button>


   <SignUpModal
    open={open}
    handleCloseSignUp={handleCloseSignUp}
   />

   {/* <LoginModal
    open={openLogin}
    handleCloseLogin={handleCloseLogin}
   /> */}

  </Layout>
 )
}

export { NavBarLogin };