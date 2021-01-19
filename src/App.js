import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import './styles/index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
