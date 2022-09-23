import './ToDoList.scss'
import { Box, Container } from '@mui/material';
import { Stack } from '@mui/system';
import { TitleDark } from './TitleDark';
import { TaskInput } from './TaskInput';
import { ItemList } from './ItemList';

const ToDoList = () => {


 
 return (
  <Container>
   <Box
    className='ToDoList'
    sx={{
     width: 300,
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
     <TaskInput />
     <ItemList/>

    </Stack>
   </Box>
  </Container>
 )
}

export { ToDoList };