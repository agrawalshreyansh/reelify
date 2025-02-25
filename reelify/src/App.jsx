import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Channelview from './pages/channelview'
import Navbar from './components/top_navbar'
import StreamLayout from './layouts/streamLayout'
import Login from './pages/login'
import SignUp from './pages/Signup'
import SideLayout from './layouts/sideLayout'
import Homegrid from './components/homeGrid'
import SubscriptionGrid from './components/subsgrid'
import SavedVideosGrid from './components/savedgrid'
import WatchHistoryGrid from './components/historygrid'
import MyVideoGrid from './components/myvideogrid'
import Settings from './components/settings'
import UploadVideo from './components/uploadVideo'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='' element={<SideLayout Component={Homegrid} childComponent= {{showChannelName : true}}/>}/>
          <Route path='/subscriptions' element={<SideLayout Component={SubscriptionGrid}/>}/>
          <Route path='/SavedVideos' element={<SideLayout Component={SavedVideosGrid}/>}/>
          <Route path='/watchHistory' element={<SideLayout Component={WatchHistoryGrid}/>}/>
          <Route path='/mychannel' element={<SideLayout Component={MyVideoGrid}/>}/>
          <Route path='/upload' element={<SideLayout Component={UploadVideo}/>}/>
          <Route path='/settings' element={<SideLayout Component={Settings}/>}/>
          <Route path='/user/:id/:tab?' element={<SideLayout Component={Channelview}/>}/>
          <Route path='/playVideo/:id' element={<StreamLayout/>}/>
          <Route path='/signup' element ={<SideLayout Component={SignUp}/>}/>
          <Route path='/login' element ={<SideLayout Component={Login}/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
