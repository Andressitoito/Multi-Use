import { Box, IconButton, Typography } from '@mui/material';
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import './TitleDark.scss'

const TitleDark = ({ theme }) => {
 return (
  <Box
   sx={{
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
   }}>
   <Typography
    sx={{
     fontSize: 24,
     fontFamily: 'Segoe UI',
     fontWeight: 'bold'
    }}>
    ToDo List
   </Typography>
   <IconButton
    sx={{
    }}>
    {
     theme
      ? <BsMoonStars />
      : <BsMoonStarsFill />
    }
   </IconButton>
  </Box>
 )
}

export { TitleDark };