import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import DemoComponent from './assets/DemoComponent.jsx';
import DemoComponent2 from './assets/DemoComponent2.jsx'
import Projects from './Pages/Projects.jsx'
import Services from './Pages/Services.jsx'
import MainRouter from './mainRouter.jsx'
import Layout from './Components/Layout.jsx'

function App() {

  return (
    <>
      <Router>
        <MainRouter />
      </Router>
    </>
  )
}

export default App