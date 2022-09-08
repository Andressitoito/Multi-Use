import './QuestionAnswer.scss'
 
const QuestionAnswer = ({content, theme}) => {

 return (
  <div className='QuestionAnswer' data-theme={theme}>
   <p>{content}</p>
  </div>
 )
}
 
export { QuestionAnswer };