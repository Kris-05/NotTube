import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import WatchScreen from './Screens/WatchScreen/WatchScreen';

import { Container } from 'react-bootstrap';
import './_app.scss';
import { useSelector } from 'react-redux';


function Layout({ children }) {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(val => !val);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app-container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className='app-main'>
          {children}
        </Container>
      </div>
    </>
  );
}

function App() {

  const {accessToken, loading} = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!loading && !accessToken){
      navigate('/auth');
    }
  },[accessToken, loading, navigate])

  return (
    <Routes>
      <Route path='/' element={<Layout><HomeScreen /></Layout>} />
      <Route path='/auth' element={<LoginScreen />} />
      <Route path='/search' element={<Layout><h1>search me</h1></Layout>} />
      <Route path='/watch/:id' element={<Layout><WatchScreen/></Layout>} />
      <Route path='*' element={<Navigate to='/'/>} />
    </Routes>
  );
}

export default App;
