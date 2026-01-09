import { createRoot } from 'react-dom/client'
import './app/styles/global.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './app/pages/Home'
import NotFound from './app/pages/NotFound'


createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
)
