import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import {Provider} from "react-redux"
import { Toaster } from "./components/ui/sonner";
import LoadingSpinner from './components/LoadingSpinner.jsx'
import { useLoadUserQuery } from './api/authapi.js'
const Custom = ({ children }) => {
    const { isLoading } = useLoadUserQuery();
    return <>{isLoading ? <LoadingSpinner/> : <>{children}</>}</>;
  };

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <Custom>
        <App />
        <Toaster />
      </Custom>
    </Provider>
  
)
