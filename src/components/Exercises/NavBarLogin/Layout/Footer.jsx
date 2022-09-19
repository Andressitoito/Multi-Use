import { Box, Typography } from '@mui/material';
import './Footer.scss'

const Footer = () => {
 return (
  <Box
   sx={{
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#0009',
    p: 1,
    gap: 1,
    position: 'fixed',
    width: '100%',
    bottom: '2.25rem'
   }}>

   <Typography
    variant="button"
    color='white'>
    Material UI login - sign up
   </Typography>
  </Box>
 )
}

export { Footer };