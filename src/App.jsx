import { BrowserRouter, Routes, Route } from "react-router-dom";
import Channelview from "./pages/channelview";
import Navbar from "./components/top_navbar";
import StreamLayout from "./layouts/streamLayout";
import Login from "./pages/login";
import SignUp from "./pages/Signup";
import SideLayout from "./layouts/sideLayout";
import SubscriptionGrid from "./components/subsgrid";
import SavedVideosGrid from "./components/savedgrid";
import WatchHistoryGrid from "./components/historygrid";
import MyVideoGrid from "./components/myvideogrid";
import Settings from "./components/settings";
import UploadVideo from "./components/uploadVideo";
import TermsCondition from "./components/policies";
import ChangePassword from "./components/forgotPassword";
import Home from "./components/home";
// import axios from 'axios';
// import { useEffect } from "react";

function App() {

  // const RefreshAccessToken = async () => {
    
  //   await axios.post("http://localhost:3000/api/v1/users/refresh-token",{},{withCredentials:true})

  // }

  // useEffect(() => {
  //     RefreshAccessToken()
  // })


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path=""
            element={
              <SideLayout
                Component={Home}
                childComponent={{ showChannelName: true }}
              />
            }
          />
          <Route
            path="/subscriptions"
            element={<SideLayout Component={SubscriptionGrid} />}
          />
          <Route
            path="/SavedVideos"
            element={<SideLayout Component={SavedVideosGrid} />}
          />
          <Route
            path="/watchHistory"
            element={<SideLayout Component={WatchHistoryGrid} />}
          />
          <Route
            path="/mychannel"
            element={<SideLayout Component={MyVideoGrid} />}
          />
          <Route
            path="/upload"
            element={<SideLayout Component={UploadVideo} />}
          />
          <Route
            path="/settings"
            element={<SideLayout Component={Settings} />}
          />
          <Route
            path="/policy"
            element={<SideLayout Component={TermsCondition} />}
          />
          <Route
            path="/user/:id/:tab?"
            element={<SideLayout Component={Channelview} />}
          />
          <Route path="/playVideo/:id" element={<StreamLayout />} />
          <Route path="/signup" element={<SideLayout Component={SignUp} />} />
          <Route path="/login" element={<SideLayout Component={Login} />} />
          <Route 
            path="/changepassword"
            element={<SideLayout Component={ChangePassword} />}
          />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
