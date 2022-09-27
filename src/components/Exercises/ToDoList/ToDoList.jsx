import './ToDoList.scss'
import { Box, Container } from '@mui/material';
import { Stack } from '@mui/system';
import { TitleDark } from './TitleDark';
import { TaskInput } from './TaskInput';
import { ItemList } from './ItemList';
import { useState } from 'react';


const ToDoList = () => {

 const [taskValue, setTaskValue] = useState('')

 const handleChangeInput = (e) => {
  setTaskValue(e.target.value)
 }

 const [clickOk, setClickOk] = useState(true)

 return (
  <Container>
   <Box
    className='ToDoList'
    sx={{
     width: 400,
     my: 5,
     mx: 'auto',
     borderRadius: 3,
     p: 2,
     boxShadow: 2,
     maxWidth: 400
    }}
   >
    <Stack>
     <TitleDark />

     <TaskInput
      handleChangeInput={handleChangeInput}
      taskValue={taskValue}
      setClickOk={setClickOk}
      clickOk={clickOk}
      setTaskValue={setTaskValue}
     />

     <ItemList
      clickOk={clickOk}
      setClickOk={setClickOk}
     />

    </Stack>
   </Box>
  </Container>
 )
}

export { ToDoList };