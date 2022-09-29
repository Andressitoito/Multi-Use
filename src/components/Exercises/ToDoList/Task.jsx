import { IconButton, Switch, TextField } from '@mui/material';
import { HiOutlineTrash } from "react-icons/hi";
import { Box } from '@mui/system';
import './Task.scss';
import { useEffect } from 'react';

const Task = ({ task, id, done, setOpenDelete, setTaskId, check, setCheck, theme }) => {

 const handleClickDelete = () => {
  setOpenDelete(true)
  setTaskId({
   id: id
  })
 }

 const handleChange = (e) => {
  let TodoList = JSON.parse(localStorage.getItem('TodoList'))

  let NewList = TodoList.map(elem => {
   if (elem.id === id) {
    return {
     ...elem,
     done: e.target.checked
    }
   } else {
    return { ...elem }
   }
  })
  localStorage.setItem('TodoList', JSON.stringify(NewList))
  setCheck(!check)
 }

 useEffect(() => {
 }, [check])

 return (
  <Box
   sx={{
    position: 'relative',
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    borderRadius: 2,
    mb: 1,
    boxShadow: '0px 0px 5px #0005',
    backgroundColor:
    theme
     && '#E8E8E8'
   }}
   style={{
    boxShadow:
     done ? '0px 0px 10px #33CC99'
      : '0px 0px 5px #0005',
    color: done ? '#33CC66'
     : '#282828'
   }}

  >
   <Box
    sx={{
     display: 'flex',
     flexDirection: "row",
     alignItems: "center",
     justifyContent: 'space-between',
    }}>
    <Switch color="success"
     onChange={handleChange}
     checked={done}
     inputProps={{ 'aria-label': 'controlled' }}
    />

    <TextField
     className='Task-TextField'
     size='small'
     multiline={true}
     fullWidth
     maxRows={4}
     value={task}
     variant='standard'
     InputProps={{ 
      disableUnderline: true,
      }}
    />

   </Box>
   <Box>
    <IconButton
     sx={{
      backgroundColor: '#E8E8E8'
     }}
     onClick={handleClickDelete}
    >
     <HiOutlineTrash
     />
    </IconButton>
   </Box>

  </Box>
 )
}

export { Task };

