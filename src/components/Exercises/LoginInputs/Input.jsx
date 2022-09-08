import './Input.scss'



const Input = ({
 type,
 name,
 placeholder,
 textarea,
 handleChange,
}) => {

 return (
  textarea
   ? <textarea></textarea>
   : <input
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={handleChange} />
 )
}

export { Input };
