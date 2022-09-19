import { Button, FormControl, Modal, Typography, Input, InputLabel, InputAdornment, IconButton, FormHelperText } from "@mui/material";
import { MdAccountCircle, MdVpnKey, MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { Box } from "@mui/system";
import { useState } from "react";
import "./SignUpModal.scss";
import { useEffect } from "react";

const SignUpModal = ({ Open, handleCloseSignUp }) => {


 const open = true
 
 const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#D3D3D3",
  border: "1px solid #5994",
  boxShadow: "0px 0px 5px #ffffffbd",
  p: 4,
  borderRadius: 2,
 };

 const [values, setValues] = useState({
  username: '',
  password: '',
  repeatPassword: '',
  showPassword: false,
 });

 const [error, setError] = useState({
  username: {
   invalid: false,
   empty: false,
   taken: false
  },
  password: {
   invalid: false,
   empty: false
  },
  repeatPassword: {
   invalid: false,
   empty: false
  }
 })

 const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
 };

 const handleClickShowPassword = () => {
  setValues({
   ...values,
   showPassword: !values.showPassword,
  });
 };

 const handleMouseDownPassword = (event) => {
  event.preventDefault();
 };

 const handleSubmit = (e) => {
  e.preventDefault()
  setValues({
   username: '',
   password: '',
   repeatPassword: '',
   showPassword: false,
  });
  // handleClose()
 }

 const validateField = (field) => {


  if (values[field] === '') {

   setError(prevError => (
    {
     ...prevError,
     [field]: {
      ...prevError[field],
      empty: true
     }
    }
   ))
   // console.table(error[field])
  } else {
   setError(prevError => (
    {
     ...prevError,
     [field]: {
      ...prevError[field],
      empty: false
     }
    }
   ))
   // console.table(error[field].empty)
  }


  /*   if (values[field] === 'password') {
     if (values[field] < 8) {
      setError({ 
       ...error,
       error[field].invalid = true
      )
     }
    }
    if (values[field] === 'username') {
     const regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
     if (!regex.test(values[field])) {
      setError(
       ...error,
       error[field].invalid = true
      )
     }
    } */


 }

 useEffect(() => {



  validateField('username')
  // validateField('username')

  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [values.username])


 /* 
  
 16gb 2400
  
 27 892 557
  
 15gb 1700
  
  
  
  
  
 */

 return (
  <div>
   <Modal
    open={open}
    onClose={handleCloseSignUp}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
   >
    <Box
     component='form'
     onSubmit={handleSubmit}
     sx={style}>
     <Typography variant="h6" component="h2">
      Sign Up!
     </Typography>

     <Box
      sx={{
       display: "flex",
       alignItems: "flex-end",
      }} >
      <MdAccountCircle
       style={{
        fontSize: 22,
        margin: '1 0 14 4',
       }}
      />
      <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
       <InputLabel htmlFor="standard-adornment-password">Username</InputLabel>
       <Input
        type={'text'}
        value={values.username}
        onChange={handleChange('username')}
       />
       {
        error.username.empty &&
        <FormHelperText id="component-error-text">Invalid username</FormHelperText>
       }
      </FormControl>
     </Box>

     <Box
      sx={{
       display: "flex",
       alignItems: "flex-end",
      }} >
      <MdVpnKey
       style={{
        fontSize: 22,
        margin: '1 0 14 4',
       }}
      />
      <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
       <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
       <Input
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
         <InputAdornment position="end">
          <IconButton
           aria-label="toggle password visibility"
           onClick={handleClickShowPassword}
           onMouseDown={handleMouseDownPassword}
          >
           {values.showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
          </IconButton>
         </InputAdornment>
        }
       />
      </FormControl>

     </Box>
     <Box
      sx={{
       display: "flex",
       alignItems: "flex-end",
      }} >
      <MdVpnKey
       style={{
        fontSize: 22,
        margin: '1 0 14 4',
       }}
      />
      <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
       <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
       <Input
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('repeatPassword')}
        endAdornment={
         <InputAdornment position="end">
          <IconButton
           aria-label="toggle password visibility"
           onClick={handleClickShowPassword}
           onMouseDown={handleMouseDownPassword}
          >
           {values.showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
          </IconButton>
         </InputAdornment>
        }
       />
      </FormControl>

     </Box>

     {/* SIGN IN - CANCEL */}
     <Box
      sx={{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'space-between',
       mt: 4,
       p: 1
      }}
     >
      <Button
       variant='contained'
       color='error'
       onClick={handleCloseSignUp}>Cancel</Button>

      <Button
       variant='contained'
       type='submit'
       color='primary'
       value='Submit'>Sign Up</Button>
     </Box>
    </Box>
   </Modal>
  </div>
 );
};

export { SignUpModal };
