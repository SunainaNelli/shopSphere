import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './app/store.js';
import { HashRouter } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Bounce, Flip, Zoom } from 'react-toastify';


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
       <HashRouter>
         <App />
         <ToastContainer
           position="bottom-right"
           autoClose={2000}
           pauseOnHover
           draggable
           hideProgressBar={false}
           theme="light"
           transition={Bounce} // or slide, zoom, flip
          
         />
       </HashRouter>
     </Provider>
  </StrictMode>,
)
