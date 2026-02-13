import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import SurprisePage from './components/SurprisePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/valentines-surprises" element={<App/>} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
