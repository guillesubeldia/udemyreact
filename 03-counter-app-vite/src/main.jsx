import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import {HelloWorldApp} from './HelloWorldApp.jsx';
import { FirstApp } from './FirstApp.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    <FirstApp />
  </React.StrictMode>
); 