import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecordContextProvider } from './context/recordContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecordContextProvider>
       <App />
    </RecordContextProvider>
  </React.StrictMode>
);

