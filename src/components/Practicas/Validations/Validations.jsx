import './Validations.scss'
import React, { useState } from 'react';
import { TextField, Button, Box, FormHelperText } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

const Validations = ({ handleClose }) => {

 const { register, handleSubmit, control, formState: { errors } } = useForm()

 const sendForm = (data) => {
  console.log(data)
 }

 console.log(errors)

 return (
  <form onSubmit={handleSubmit(sendForm)}>
   <Box
    sx={{
     display: 'flex',
     width: 300,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     padding: 2,
     my: 3,
     mx: 'auto'
    }}>

    {/* <Controller
     name={"name"}
     control={control}
     render={({ field: { onChange, value } }) => (
      <TextField onChange={onChange} value={value} label={"name"} />
     )}
    /> */}

    <Controller
     name={"name"}
     control={control}
     render={() => (
      <TextField {...register('name', {
       required: 'asdasdasd',
       minLength:{
        value: 5,
        message: 'Minimum 5 characters'
       }
      })} label={"name"} />
     )}
    />

    {/* <TextField
     label="First Name"
     variant="filled"
     type='text'
     error={errors.name}
     {...register('name', { required: 'asdasdasd' })}
    />
     */}

    {
     errors.name &&
     <FormHelperText error >{errors.name.message}</FormHelperText>
    }



    {/* <TextField
     label="Email"
     variant="filled"
     type="email"
     {...register('email', {
      required: "this field is required",
      pattern: {
       value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
       message: 'This email is invalid'
      }
     })}
    />
    {
     errors.email &&
     <FormHelperText error >Nombre requerido</FormHelperText>
    } */}


    <TextField
     label="Password"
     variant="filled"
     type="password"
    />


    <div>
     <Button variant="contained" onClick={handleClose}>
      Cancel
     </Button>
     <Button type="submit" variant="contained" color="primary">
      Signup
     </Button>
    </div>



   </Box>
  </form>
 );
};

export { Validations };