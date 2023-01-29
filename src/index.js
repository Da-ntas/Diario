import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from "./styles/global";
import App from './App';
import './styles/variables.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle theme={'dark'}/>
    <App />
  </React.StrictMode>
);
