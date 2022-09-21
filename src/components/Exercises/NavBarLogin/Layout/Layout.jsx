import { Footer } from './Footer';
import { Navbar } from './Navbar';

const Layout = ({ children, handleOpenSignUp, handleOpenLogin }) => {
 return (
  <div>
   <Navbar
    handleOpenSignUp={handleOpenSignUp}
    handleOpenLogin={handleOpenLogin}
   />
   {children}
   <Footer />
  </div>
 )
}

export { Layout };