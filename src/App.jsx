// App.jsx
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './context/UserContext';
import { SearchProvider } from './context/SearchContext';
import AuthInitializer from './components/Auth';
import { CateogrizedVideo, Container, Navbar } from './layouts/index.js';
import UploadVideo from './pages/uploadVideo.jsx';
import History from './pages/history.jsx';
import Stream from './layouts/Stream.jsx';
import Channel from './pages/channel.jsx';
import Subscriptions from './pages/subscriptions.jsx';
import SearchResults from './pages/SearchResults.jsx';
import UserContext from './context/UserContext';
import { Loader } from './components/index.js';

function AppContent() {
  const { authLoading } = useContext(UserContext);

  return (
    <>
      <ToastContainer />
      <AuthInitializer />
      {authLoading ? (
        <div className="flex items-center justify-center h-screen bg-bg">
          <Loader />
        </div>
      ) : (
        <div className='bg-bg'>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Container><CateogrizedVideo /></Container>} />
              <Route path='/upload' element={<Container><UploadVideo /></Container>} />
              <Route path='/history' element={<Container><History /></Container>} />
              <Route path='/channel/:username' element={<Container><Channel /></Container>} />
              <Route path='/subscriptions' element={<Container><Subscriptions /></Container>} />
              <Route path='/search' element={<Container><SearchResults /></Container>} />
              <Route path='/stream/:id' element={<Stream />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <SearchProvider>
        <AppContent />
      </SearchProvider>
    </UserProvider>
  );
}

export default App;
