import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Qrcode } from './QRCODE/qrcode.jsx'
import "./QRCODE/Qrcode.css"
// import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <Qrcode />
  </StrictMode>,
)
