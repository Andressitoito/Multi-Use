import './CardMapButtons.scss'
import fullStar from './fullStar.png';
import emptyStar from './emptyStar.png'

const CardMapButtons = ({ title, description, stars, style }) => {


 return (
  <div className='CardMapButtons'>
   <h3>{title}</h3>
   <p className='description'>{description}</p>
   <span >
    {
     [...Array(5)].map((elem, index) => {
      return <img key={index} src={index <= stars ? fullStar : emptyStar} alt='star'/>
     }
     )
    }
   </span>
   <button style={style}>Button</button>
  </div>
 )
}

export { CardMapButtons };