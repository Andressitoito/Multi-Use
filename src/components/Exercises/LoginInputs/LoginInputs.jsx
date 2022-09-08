import { useState } from 'react';
import { Input } from './Input';
import './LoginInputs.scss'

const LoginInputs = () => {

 const [theme, setTheme] = useState(false)
 const [error, setError] = useState({
  email: false,
  password: false,
  emptyFields: false,
  errors: true
 })

 const [values, setValues] = useState(
  {
   email: '',
   password: '',
   check: ''
  }
 )



 const handleSubmit = (e) => {
  e.preventDefault()
  validateFields()
  if (error.errors) {
   return alert('Please complete login')
  } else {
   return alert(`Welcome ${values.email}`)
  }
 }

 const validateEmptyFields = () => {
  if (values.email === '' || values.password === '') {
  console.log(values.email, values.password)
   setError({
    ...error,
    emptyFields: true,
    errors: true
   })
   return true
  } else {
   setError({
    ...error,
    emptyFields: false,
    errors: false
   })
   return false
  }
 }

 const validateEmail = () => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (!emailRegex.test(values.email)) {
   setError({
    ...error,
    email: true,
    errors: true
   })
  }

 }
 const validatePassword = () => {


  if (values.password.length < 6) {
   console.log(values.password)
   setError({
    ...error,
    password: true,
    errors: true
   })
  }

 }


 const validateFields = () => {

  console.log(values)
console.log(validateEmptyFields())
  if (
   validateEmptyFields()
   // || validateEmail()
   // || validatePassword()
  ) {
   return console.log('TODO MAL')
  }
  else {
   console.log('entro aca')
   return setError({
    email: false,
    password: false,
    emptyFields: false,
    errors: false
   })
  }
 }


 const handleChange = (e) => {
  setValues({
   ...values,
   [e.target.name]: e.target.value
  })
  validateFields()
  console.log(error)
 }



 return (
  <form
   onSubmit={handleSubmit}
   className='LoginInputs' data-theme={theme}>
   <button
    onClick={(e) => {
     e.preventDefault()
     setTheme(!theme)
    }}
    className='button-theme-form'>
    Theme
   </button>

   <label htmlFor="email">
    Email
    <Input
     handleChange={handleChange}
     type={'email'}
     name={'email'} />
    {
     error.emptyFields
      ? <p>Please complete field</p>
      : error.email &&
      <p>Please enter a valid email address</p>
    }
   </label>
   <label htmlFor="password">
    Password
    <Input
     handleChange={handleChange}
     type={'password'}
     name={'password'} />
    {
     error.emptyFields
      ? <p>Please complete field</p>
      : error.password &&
      <p>Password must be longer than 7 characters</p>
    }
   </label>
   <label htmlFor="">
    Remember me
    <Input
     handleChange={handleChange}
     type={'checkbox'}
     name={'check'} />
   </label>
   <label htmlFor="">
    <Input
     type={'submit'}
     name={'Login'} />
   </label>
  </form>
 )
}

export { LoginInputs };




/* 

<Input
type={'text'}
name={'user'}
/>

<Input
type={'password'}
name={'password'}
/>

<Input
type={'submit'}
/>

<Input
textarea
/>

 */