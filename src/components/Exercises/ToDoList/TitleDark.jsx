import { Box, IconButton, Typography, withTheme } from '@mui/material';
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import './TitleDark.scss'

const TitleDark = ({ theme, setTheme }) => {

 const handleClick = () => {
  setTheme(!theme)
 }

 return (
  <Box
   sx={{
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: theme
     && '#696969',
    color: theme
     && '#FFFFFF'
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
     backgroundColor: theme
      && '#696969',
     color: theme
      && '#FFFFFF'
    }}
    onClick={handleClick}
   >
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