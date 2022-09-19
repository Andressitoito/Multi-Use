import { Footer } from './Footer';
import { Navbar } from './Navbar';
 
const Layout = ({children, handleOpenSignUp}) => {
 return (
  <div>
   <Navbar
   handleOpenSignUp={handleOpenSignUp}
   />
 {children}
   <Footer/>
  </div>
 )
}
 
export { Layout };