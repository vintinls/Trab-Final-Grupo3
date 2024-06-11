import React from 'react'
import './styles/global.css'
import AppRouter from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App