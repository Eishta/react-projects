import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import App from './container/App';
// import App from './interviews/MindTickle/App';
import App from './interviews/Tekion/ProgressBar/App';


ReactDOM.render(
  <React.StrictMode>
    <App duration='5s'/>
  </React.StrictMode>,
  document.getElementById('root')
);