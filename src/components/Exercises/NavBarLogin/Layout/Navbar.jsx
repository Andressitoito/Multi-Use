import { Box, Button } from '@mui/material';
import { BsFillPersonFill, BsFillPersonPlusFill } from "react-icons/bs";
import './Navbar.scss'



const Navbar = ({ handleOpenLogin, handleOpenSignUp }) => {

 const hover = {
  '&:hover': {
   backgroundColor: '#ffffffbd',
   color: 'black'
  }
 }

 const style = {
  boxShadow: '0px 0px 5px #ffffffbd',
  border: '1px solid #5994',
 }

 return (
  <Box
   sx={{
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#0009',
    p: 1,
    gap: 1,

   }}>

   <Button
    sx={hover}
    onClick={handleOpenLogin}
    style={style}
    variant="contained"
    endIcon={<BsFillPersonFill />}>
    Log In
   </Button>


   <Button
    onClick={handleOpenSignUp}
    sx={hover}
    style={style}
    variant="contained"
    endIcon={<BsFillPersonPlusFill />}>
    Sign Up
   </Button>

  </Box>
 )
}

export { Navbar };