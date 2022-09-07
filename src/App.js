import './App.scss'

/* IMPORT COMPONENTS */
import {
  Layout,
  // MapButtons,
  // HiddenMenu,
  // CounterInput,
  Questions
} from './components';

const App = () => {
  return (
    <div className='App'>
      <Layout >
        <div className='App-Box'>

          {/* {<MapButtons/>} */}
          {/* {<HiddenMenu/>} */}
          {/* {<CounterInput />} */}
          <Questions />

        </div>
      </Layout>
    </div>
  )
}

export default App;