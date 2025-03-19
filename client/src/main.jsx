import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'   // We need to import the BrowserRouter component from the react-router-dom package 
import { Provider } from 'react-redux' // This is the Provider component that we need to wrap the App component with
import store from './store/store.js'    // This is the Redux store that we created in the previous step


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>   
   <App />
   </Provider>  // This is the Provider component that wraps the App component. It provides the Redux store to the App component and all its children
  </BrowserRouter>
   
  
)
