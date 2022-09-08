import { useState } from 'react';
import { QuestionAnswer } from './QuestionAnswer';
import './QuestionBox.scss'

const QuestionBox = ({ title, content, theme }) => {

 const [showAnswer, setShowAnswer] = useState(false)

 return (
  <>
   <div className='QuestionBox' data-theme={theme}>
    <p>{title}</p>
    <button
     onClick={() => {
      setShowAnswer(!showAnswer)
     }}
    >{'>'}</button>
   </div>
   {
    showAnswer && <QuestionAnswer
     content={content}
     theme={theme}
    />
   }
  </>
 )
}

export { QuestionBox };