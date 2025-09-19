import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Layout from './components/Layout.js'
import Home from './pages/Home.js'
import Channel from './pages/Channel.js'
import Video from './Video.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Layout1 />
    <Home />
    <Channel />
    <Video />
  </StrictMode>,
)
