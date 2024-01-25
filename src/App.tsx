import React from 'react';
import NavBar from './components/NavBar';
import logo from './logo.svg'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConferenceCard from './components/card/ConferenceCard';
import meetingImg from './assets/meeting3.jpeg'
import meetingImg2 from './assets/meeting2.jpeg'
import DetailsCard from './components/card/DetailsCard';

import landingDetails from './utils/data.json'
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import BottomNav from './components/BottomNav';

function App() {

  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route
            path="/contact"
            element={<Contact />}
        />
        <Route path="/blogs" element={<Blogs />} /> */}
          <Route
            path="/sign-up"
            element={<SignUp />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
        <BottomNav />
      </div>

    </Router>
  );
}

export default App;
