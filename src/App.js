import './App.scss'

/* IMPORT COMPONENTS */
import {
 Layout,
 Validations,
 // NavBarLogin,
 // ToDoList,
 // LoginInputs,
 // MapButtons,
 // HiddenMenu,
 // CounterInput,
 // Questions,
} from './components';

const App = () => {
 return (
  <div className='App'>
   <Layout >

    {/* {<MapButtons/>} */}
    {/* {<HiddenMenu/>} */}
    {/* {<CounterInput />} */}
    {/* <Questions /> */}
    {/* <LoginInputs/> */}
    {/* <ToDoList /> */}
    {/* <Fetchs /> */}
    <Validations/>


    {/* <NavBarLogin/> */}

   </Layout>
  </div>
 )
}

export default App;