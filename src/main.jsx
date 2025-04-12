import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Can be removed after Tailwind config is updated
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
