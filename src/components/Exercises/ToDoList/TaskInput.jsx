import { Box, TextField } from '@mui/material';
import './TaskInput.scss'

const TaskInput = () => {
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
   <TextField
    size='small'
    label="Insert Task"
    fullWidth
    variant="outlined" />
  </Box>
 )
}

export { TaskInput };