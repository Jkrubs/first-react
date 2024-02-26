import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './components/app'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <App/>
    </div>
   
  </React.StrictMode>,
)
