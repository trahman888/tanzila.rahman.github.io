import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { CompressProvider } from './contexts/compress-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <CompressProvider>
        <App />
      </CompressProvider>
    </HelmetProvider>
  </StrictMode>,
)
