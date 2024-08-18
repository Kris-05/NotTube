import React, { useState } from 'react'

import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'

import './_app.scss'

function App() {

  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(val => !val)

  return (
    <>
      {/* <Header handleToggleSidebar={handleToggleSidebar}/>

      <div className="app-container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>

        <Container fluid className='app-main'>
          <HomeScreen/>
        </Container>
        
      </div> */}
      <LoginScreen/>
    </>
  )
}

export default App
