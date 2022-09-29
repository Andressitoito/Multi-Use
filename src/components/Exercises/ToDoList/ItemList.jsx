import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { DeleteConfirm } from './DeleteConfirm';
import './ItemList.scss'
import { Task } from './Task';

const ItemList = ({ clickOk, theme }) => {

 const [ check, setCheck ] = useState(false)
 const TaskList = JSON.parse(localStorage.getItem('TodoList'))

 useEffect(() => {
 }, [clickOk])

 const [openDelete, setOpenDelete] = useState(false)
 const [taskId, setTaskId] = useState({})

 return (
  <Container
   sx={{
    p: 3,
    pb: 2,
    boxShadow: 1,
    borderRadius: 1,
    my: 1,
    backgroundColor: theme
    && '#909090',

   }}>

   {
    TaskList && TaskList.map((elem) => (
     <Task
      key={elem.id}
      task={elem.task}
      id={elem.id}
      done={elem.done}
      setOpenDelete={setOpenDelete}
      setTaskId={setTaskId}
      check={check}
      setCheck={setCheck}
      theme={theme}
     />
    ))
   }
   <DeleteConfirm
    openDelete={openDelete}
    setOpenDelete={setOpenDelete}
    taskId={taskId}
   />
  </Container>
 )
}

export { ItemList };
