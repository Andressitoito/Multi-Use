import { Box, Modal, Typography, Button } from '@mui/material';
import './DeleteConfirm.scss'

const DeleteConfirm = ({ openDelete, setOpenDelete, taskId }) => {

 const { id } = taskId

 const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: 'none',
  p: 4,
  boxShadow: 2,
  borderRadius: 3,
  textAlign: 'center'
 };

 const handleClose = () => {
  setOpenDelete(false)
 }

 const handleClickDelete = () => {

  let TodoList = JSON.parse(localStorage.getItem('TodoList'))

  const NewList = TodoList.filter(elem => {
   return elem.id !== id
  })

  localStorage.setItem('TodoList', JSON.stringify(NewList))

  handleClose()
 }

 return (
  <>
   <Modal
    open={openDelete}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
   >
    <Box sx={style}
    >
     <Typography id="modal-modal-title" variant="h6" component="h2">
      Confirm elimination
     </Typography>

     <Box
      sx={{
       display: 'flex',
       gap: 2,
       mt: 2,
       justifyContent: 'space-around'
      }}
     >
      <Button
       onClick={handleClose}
       variant="contained"
      >
       Cancel
      </Button>
      <Button
       onClick={handleClickDelete}
       variant="contained"
       color="error"
      >
       Delete
      </Button>
     </Box>
    </Box>
   </Modal>
  </>
 )
}

export { DeleteConfirm };