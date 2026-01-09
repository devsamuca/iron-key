import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/global.css'
import Home from './app/pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
