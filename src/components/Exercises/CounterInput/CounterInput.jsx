import './CounterInput.scss'
import { useState } from 'react';

const CounterInput = () => {

 const [counter, setCounter] = useState(0)

 return (
  <div className='CounterInput'>
   <button
    onClick={() => {
     setCounter(counter - 1)
    }}
    disabled={counter <= 0
     ? true
     : false
    }
   >-</button>
   <input type="number" value={counter} onChange={(e) => {
    e.preventDefault()
    setCounter(parseInt(e.target.value))
   }} />
   <button
    onClick={() => {
     setCounter(counter + 1)
    }}
    disabled={counter >= 50
     ? true
     : false
    }
   >+</button>
   <p>{counter}</p>
  </div>
 )
}

export { CounterInput };