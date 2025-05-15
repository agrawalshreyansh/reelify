
import { Upload } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CateogrizedVideo, Container, Navbar } from './layouts/index.js'
import UploadVideo from './pages/uploadVideo.jsx';
import { UserProvider } from './context/UserContext';
import Videolist from './components/videolist.jsx';
import History from './pages/history.jsx';
import Stream from './layouts/Stream.jsx';
import Channel from './pages/channel.jsx';
import Subscriptions from './pages/subscriptions.jsx';
import { ToastContainer } from 'react-toastify';
import React, { useEffect } from 'react';
import useFetchData from './hooks/useFetchData.js';
import UserContext from './context/UserContext';
import { useContext } from 'react';

function App() {

const { setUser, setIsLoggedIn } = useContext(UserContext);

  const { statusCode, response, _, fetch } = useFetchData('users/authenticateStatus', true);

  useEffect(() => {
      fetch()
      if (statusCode === 200) {
        setUser(response);
        setIsLoggedIn(true);
      } 
  }, []);

  return (
    <>
      <div className='bg-bg'>
        <ToastContainer />
        
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Container><CateogrizedVideo /></Container>} />
              <Route path='/upload' element={<Container><UploadVideo /></Container>} />
              <Route path='/history' element={<Container><History /></Container>} />
              <Route path='/channel/:username' element={<Container><Channel /></Container>} />
              <Route path='/subscriptions' element={<Container><Subscriptions /></Container>} />
              <Route path='/stream/:id' element={<Stream />} />
            </Routes>

          </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
