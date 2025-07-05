import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import 'leaflet/dist/leaflet.css';
import { AuthProvider } from './componentes/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <AuthProvider>
        <App />
    </AuthProvider>
  </StrictMode>,
)
