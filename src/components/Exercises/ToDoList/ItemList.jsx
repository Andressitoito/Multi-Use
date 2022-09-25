import { Container } from '@mui/material';
import { useEffect } from 'react';
import './ItemList.scss'
import { Task } from './Task';

const ItemList = ({ clickOk }) => {

 const TaskList = JSON.parse(localStorage.getItem('TodoList'))

 useEffect(() => {
 }, [clickOk])

 return (
  <Container
   sx={{
    p: 3,
    pb: 2,
    boxShadow: 1,
    borderRadius: 1,
    my: 1,
   }}>

   {
    TaskList && TaskList.map((elem, index) => (
     <Task
      key={index}
      task={elem.task}
     />
    ))
   }

  </Container>
 )
}

export { ItemList };
