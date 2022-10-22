import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { useAppSelector } from './redux/hooks';

function App() {
  const userState = useAppSelector((state) => state.user.value.email);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/signin'
          element={userState ? <Navigate to='/home' /> : <SignIn />}
        />
        <Route
          path='/signup'
          element={userState ? <Navigate to='/home' /> : <SignUp />}
        />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
