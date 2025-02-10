import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Channelview from './pages/channelview'
import Navbar from './layouts/top_navbar'
import Videogrid from './components/videogrid'
import StreamLayout from './layouts/streamLayout'
import Login from './pages/login'
import SignUp from './pages/Signup'

function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='' element={<Home Component={Videogrid}/>}></Route>
          <Route path='/user/:id' element={<Channelview/>}></Route>
          <Route path='/playVideo/:id' element={<StreamLayout/>}></Route>
          <Route path='/signup' element ={<Home Component={SignUp}/>}></Route>
          <Route path='/login' element ={<Home Component={Login}/>}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
