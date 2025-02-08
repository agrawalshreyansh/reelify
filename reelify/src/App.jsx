import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Channelview from './pages/channelview'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route path='/user/:id' element={<Channelview/>}></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
