import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostMovie from './Component/PostMovie.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PostMovie/>
  </StrictMode>
)
