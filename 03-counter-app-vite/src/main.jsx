import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp.jsx';
//import { CounterApp } from './CounterApp.jsx';
//import {HelloWorldApp} from './HelloWorldApp.jsx';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value={420} /> */}
    <FirstApp />
  </React.StrictMode>
); 