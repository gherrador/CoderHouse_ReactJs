import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { getFirestoreApp, getFirestoreStorage} from './Firebase/config'
import 'bootstrap/dist/css/bootstrap.min.css'

getFirestoreApp()
getFirestoreStorage()

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
