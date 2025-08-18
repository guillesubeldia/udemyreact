import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import './styles.css'
import { GifsApp } from './GifsApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <GiftExpertApp/> */}
    <GifsApp/>

  </StrictMode>,
)
