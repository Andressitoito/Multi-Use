import { useState } from 'react';
import { QuestionBox } from './QuestionBox';
import './Questions.scss'

const Questions = () => {

 const [theme, setTheme] = useState('dark')

 const list = [
  {
   title: "Where Does Space Begin?",
   content:
    "The standard space-travel answer to that question puts the egde of space at 100 kilometers above Earth's surface. ",
   id: 1,
  },
  {
   title: "How Did the Universe Begin?",
   content:
    "The universe began some 13.7 billion years ago in an event called the Big Bang.",
   id: 2,
  },
  {
   title: "What is the Universe Made of?",
   content: "This is one of those questions that has an answer that is quite mind-expanding. Basically, the universe consists of galaxies and the objects they contain: stars, planets, nebulae, black holes and other dense objects.",
   id: 3,
  },
  {
   title: "How Many Stars Can We See at Night?",
   content:
    "That depends on many factors, including how dark the skies are where. In light-polluted areas, people see only the brightest stars and not the dimmer ones.",
   id: 4,
  },
  {
   title: "What Types of Stars Are Out There?",
   content: "Astronomers classify stars and assign types to them. They do this according to their temperatures and colors, along with some other characteristics. ",
   id: 5,
  },
 ]

 return (
  <div className='Questions' >
   <button
    onClick={() => {
     setTheme(theme === 'light' ? 'dark' : 'light')
    }}
    className='theme-button'
   >Theme</button>
   {
    list.map(item => {
     return <QuestionBox
      key={item.id}
      title={item.title}
      content={item.content}
      theme={theme}
     />
    })
   }
  </div>
 )
}

export { Questions };