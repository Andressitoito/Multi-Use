import { Box, IconButton, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdCheck } from "react-icons/md";
import './TaskInput.scss'

const TaskInput = ({ taskValue, handleChangeInput, setClickOk, clickOk, setTaskValue, theme }) => {

 const [disableClick, setDisableClick] = useState(true)

 const handleClickTask = () => {
  let TodoList = JSON.parse(localStorage.getItem('TodoList'))

  if (TodoList === null) {
   TodoList = [{
    id: 0,
    task: taskValue,
    done: false
   }]

   localStorage.setItem('TodoList', JSON.stringify(TodoList))
  } else {

   let newId = ''

   const getLastId = () => {
    const lastId = [...TodoList].pop()
    const newId = lastId?.id + 1
    return newId
   }

   if (isNaN(getLastId())) {
    newId = 0
   } else {
    newId = getLastId()
   }
   TodoList.push({
    id: newId,
    task: taskValue,
    done: false
   })

   localStorage.setItem('TodoList', JSON.stringify(TodoList))
  }

  setClickOk(!clickOk)
  setTaskValue('')
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
    my: 1,
    backgroundColor: theme
     && '#909090',
    color: theme
     && '#E8E8E8'
   }}>
   <Box
    sx={{
     display: 'flex',
     gap: 1
    }}
   >
    <TextField
     sx={{
      backgroundColor:
       theme
        ? '#E8E8E8'
        : '#E8E8E8'
     }}
     size='small'
     label="Insert Task"
     fullWidth
     variant="outlined"
     value={taskValue}
     onChange={handleChangeInput}
    />
    <IconButton
     sx={{
      boxShadow:
       disableClick
        ? '0px 0px 5px #0005'
        : '0px 0px 5px #33CC66'
      ,
      color: 'green',
     }}

     style={{
      backgroundColor: theme
       && '#FFFFFF'
     }}

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