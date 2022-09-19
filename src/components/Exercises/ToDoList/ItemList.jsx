import { Container } from '@mui/material';
import './ItemList.scss'
import { Task } from './Task';

const ItemList = () => {


 const array = [
  {
   id: 1,
   text: 'Algo es asdsadfaasfdcrito'
  },
  {
   id: 2,
   text: 'Algo es asdsadfaasfdcrito'
  },
  {
   id: 3,
   text: 'Algo es asdsadfaasfdcrito'
  },
  {
   id: 4,
   text: 'Algo es asdsadfaasfdcrito'
  },
 ]

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
    array.map(item =>
     <Task
     key={item.id}
     text={item.task}

     />)
   }

  </Container>
 )
}

export { ItemList };
