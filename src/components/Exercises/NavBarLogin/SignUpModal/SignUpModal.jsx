import { Button, FormControl, Modal, Typography, Input, InputLabel, InputAdornment, IconButton, FormHelperText } from "@mui/material";
import { MdAccountCircle, MdVpnKey, MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { Box } from "@mui/system";
import { useState } from "react";
import "./SignUpModal.scss";
import { useEffect } from "react";

const SignUpModal = ({ openSignUp, handleCloseSignUp }) => {

 const [disableSubmit, setDisableSubmit] = useState(true)

 const [validateError, setValidateError] = useState({})

 const [userTaken, setUserTaken] = useState(false)

 const [values, setValues] = useState({
  username: '',
  password: '',
  repeatPassword: '',
  showPassword: false,
 });

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

 const checkAndCreateNewUser = () => {

  const multiUseData = JSON.parse(localStorage.getItem('multiUseData'))

  if (!multiUseData.hasOwnProperty('users')) {
   console.table(multiUseData)
   console.table('no existn usuarios')

   multiUseData.users = [{
    username: values.username,
    password: values.password
   }]

   localStorage.setItem('multiUseData', JSON.stringify(multiUseData))

  } else {

   let { users } = multiUseData

   const repeatedUser = users.find(user => user.username === values.username)

   if (repeatedUser === undefined) {
    users.push({
     username: values.username,
     password: values.password
    })

    setUserTaken(false)

    localStorage.setItem('multiUseData', JSON.stringify(multiUseData))

    setValues({
     username: '',
     password: '',
     repeatPassword: '',
     showPassword: false,
    });

    handleCloseSignUp()

   } else {
    setUserTaken(true)
   }
  }
 }

 const handleSubmit = (e) => {
  e.preventDefault()

  checkAndCreateNewUser()

 }

 const validateFields = () => {
  const errors = {}

  // EMPTY USERNAME
  if (values.username === '') {
   errors.usernameEmpty = true
  } else {
   delete errors.usernameEmpty
  }
  // EMPTY PASSWORD
  if (values.password === '') {
   errors.passwordEmpty = true
  } else {
   delete errors.passwordEmpty
  }
  // EMPTY REPEATPASSWORD
  if (values.repeatPassword === '') {
   errors.repeatPasswordEmpty = true
  } else {
   delete errors.repeatPasswordEmpty
  }
  // VALIDATE USERNAME
  const regexUsername = /^(?=.{3,}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
  if (!regexUsername.test(values.username)) {
   errors.invalidUsername = true
  } else {
   delete errors.invalidUsername
  }
  // VALIDATE PASSWORD
  const regexPassword = /^(?!.* )(?=.*)(?=.*[A-Z]).{8,}$/
  if (!regexPassword.test(values.password)) {
   errors.invalidPassword = true
  } else {
   delete errors.invalidPassword
  }
  // VALIDATE REPEATPASSWORD
  if (values.password !== values.repeatPassword) {
   errors.invalidRepeatPassword = true
  } else {
   delete errors.invalidRepeatPassword
  }

  setValidateError({ errors })
  const errorKeys = Object.keys(errors)

  errorKeys.length === 0
   ? setDisableSubmit(false)
   : setDisableSubmit(true)

 }

 useEffect(() => {

  validateFields()
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [values])

 return (
  <div>
   <Modal
    open={openSignUp}
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
        userTaken &&
        <FormHelperText error id="component-error-text">This username is already taken</FormHelperText>
       }
       {
        validateError.errors?.usernameEmpty &&
        <FormHelperText error id="component-error-text">Fill username</FormHelperText>
       }
       {
        validateError.errors?.invalidUsername &&
        <FormHelperText error id="component-error-text">Min 3 characters, no spaces</FormHelperText>
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
       {
        validateError.errors?.passwordEmpty &&
        <FormHelperText error id="component-error-text">Fill password</FormHelperText>
       }
       {
        validateError.errors?.invalidPassword &&
        <FormHelperText error id="component-error-text">Min 8 characters or numbers, no spaces, one capital letter</FormHelperText>
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
        value={values.repeatPassword}
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
       {
        validateError.errors?.repeatPasswordEmpty &&
        <FormHelperText error >Repeat password</FormHelperText>
       }
       {
        validateError.errors?.invalidRepeatPassword &&
        <FormHelperText error >Passwords do not match</FormHelperText>
       }
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
       disabled={disableSubmit}
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


/* 

 const validateEmptyField = (field) => {
  if (values[field] === '') {
   setError(prevError => ({
    ...prevError,
    [field]: {
     ...prevError[field],
     empty: true
    }
   }))
  } else {
   setError(prevError => ({
    ...prevError,
    [field]: {
     ...prevError[field],
     empty: false
    }
   }))
  }
 }

 const validatePassword = (field) => {
  if (field === 'password') {

   const regex = /^(?!.* )(?=.*)(?=.*[A-Z]).{8,}$/

   if (!regex.test(values[field])) {

    setError(prevError => (
     {
      ...prevError,
      [field]: {
       ...prevError[field],
       invalid: true
      }
     }
    ))

   } else {
    setError(prevError => (
     {
      ...prevError,
      [field]: {
       ...prevError[field],
       invalid: false
      }
     }
    ))
    
   }
  }
 }

 const validateUsername = (field) => {
  if (field === 'username') {
   const regex = /^(?=.{3,}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
   if (!regex.test(values[field])) {
    setError(prevError => ({
     ...prevError,
     [field]: {
      ...prevError[field],
      invalid: true
     }
    }))
   } else {
    setError(prevError => ({
     ...prevError,
     [field]: {
      ...prevError[field],
      invalid: false
     }
    }))
   }
  }
 }

 const validateRepeatPassword = (field) => {
  if (field === 'repeatPassword') {
   if (values.repeatPassword === values.password) {
    setError(prevError => ({
     ...prevError,
     [field]: {
      ...prevError[field],
      invalid: false
     }
    }))
   } else {
    setError(prevError => ({
     ...prevError,
     [field]: {
      invalid: true
     }
    }))
   }
  }
 }

*/