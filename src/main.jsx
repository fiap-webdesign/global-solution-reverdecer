import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'
import TutorialContextProvider from './context/Tutorial.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TutorialContextProvider>
      <App />
    </TutorialContextProvider>
  </StrictMode>
)
