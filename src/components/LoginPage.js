import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const switchForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };


    return (
      <div>
        <Header />
        {isLogin? <LoginForm switchToSignup={switchForm} onLoginSuccess={() => setIsLoggedIn(true)} />
                : <SignupForm switchToLogin={switchForm} />}
        <Footer />
        {/* <button onClick={handleLogout}>Sign Out</button> */}
      </div>
    );
};
  
export default LoginPage;
  