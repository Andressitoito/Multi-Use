import { Box, IconButton, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdCheck } from "react-icons/md";
import './TaskInput.scss'

const TaskInput = ({ taskValue, handleChangeInput, setClickOk, clickOk }) => {

 const [disableClick, setDisableClick] = useState(true)

 const handleClickTask = () => {
  let TodoList = JSON.parse(localStorage.getItem('TodoList'))

  if (TodoList === null) {
   console.table('no existe lista')

   TodoList = [{
    id: 0,
    task: taskValue,
    done: false
   }]

   localStorage.setItem('TodoList', JSON.stringify(TodoList))
   console.table(TodoList)

  } else {

   const lastId = [...TodoList].pop() 
   const newId = lastId.id + 1
   console.log(lastId.id)
   console.log(newId)
   console.log(TodoList)

   TodoList.push({
    id: newId,
    task: taskValue,
    done: false
   })

   localStorage.setItem('TodoList', JSON.stringify(TodoList))
   console.table(TodoList)
  }

  setClickOk(!clickOk)
 }

 useEffect(() => {
  taskValue === ''
   ? setDisableClick(true)
   : setDisableClick(false)
 }, [taskValue])

 return (
  <Box
   className='TaskInput'
   sx={{
    p: 2,
    width: '100%',
    boxShadow: 1,
    borderRadius: 1,
    my: 1
   }}>
   <Box
    sx={{
     display: 'flex',
     gap: 1
    }}
   >
    <TextField
     size='small'
     label="Insert Task"
     fullWidth
     variant="outlined"
     value={taskValue}
     onChange={handleChangeInput}
    />
    <IconButton
     sx={{ boxShadow: '0px 0px 5px #0005' }}
     disabled={disableClick}
     onClick={handleClickTask}
    >
     <MdCheck />
    </IconButton>
   </Box>
  </Box>
 )
}

export { TaskInput };