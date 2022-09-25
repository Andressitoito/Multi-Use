import { Checkbox, IconButton, Typography } from '@mui/material';
import { HiOutlineTrash } from "react-icons/hi";
import { Box } from '@mui/system';
import './Task.scss'

const Task = ({ task }) => {


 const handleClick = () => {

  let TodoList = JSON.parse(localStorage.getItem('TodoList'))

  const NewList = TodoList.find(elem => {
   return elem.task !== task

  })

  console.log(NewList)


 }


 return (
  <Box
   sx={{
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    borderRadius: 2,
    mb: 1,
   }}
   style={{ boxShadow: '0px 0px 5px #0005' }}
  >
   <Box
    sx={{
     display: 'flex',
     flexDirection: "row",
     alignItems: "center",
     justifyContent: 'space-between',
    }}>
    <Checkbox color="success" />
    <Typography>
     {task}
    </Typography>
   </Box>
   <Box>
    <IconButton
     onClick={handleClick}
    >
     <HiOutlineTrash
     />
    </IconButton>
   </Box>

  </Box>
 )
}

export { Task };



/* <TextField
      sx={{
       fontSize: 1,
       fontFamily: 'Segoe UI',
      }}
      className='Task-input'
      label="Multiline Placeholder"
      placeholder="Placeholder"
      multiline
      value={text}
      InputProps={{
       style: {
        fontSize: 14,
        readOnly: true
       }
      }}
     /> */