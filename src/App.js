import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage isLoggedIn={isLoggedIn} />} />   
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />    
        </Routes>
      </div>
    </Router>
  );
};

export default App;
