import './HiddenMenu.scss'
import { useState } from 'react';

const HiddenMenu = () => {

 const [showMenu, setShowMenu] = useState(false)
 const [theme, setTheme] = useState('light')

 const handleClick_Theme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light')
 }

 return (
  <div className='HiddenMenu' data-theme={theme}>
   <button
    className='dark-mode-button'
    onClick={handleClick_Theme}
   >Modo</button>
   <button
    onClick={() => setShowMenu(!showMenu)}
   >{showMenu
    ? 'Close Menu'
    : 'Show Menu'
    }</button>
   {
    showMenu &&
    <ul>
     <li>Inicio</li>
     <li>Productos</li>
     <li>Contactos</li>
     <li>Ayuda</li>
    </ul>}
  </div>
 )
}

export { HiddenMenu };

/* 
npm create vite@latest
Prject name: LO QUE QUIERAS
LUEGO ELEGIR REACT SIN TS

luego npm install

main.jsx queda

para correr  npm run dev

*/