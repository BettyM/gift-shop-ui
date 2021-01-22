import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import './styles/index.css';


function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
