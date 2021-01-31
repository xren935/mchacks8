import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/home';
import About from './components/about';
import Signup from './components/signup';
import Login from './components/login';
import Extra from './components/extra';
import Quiz from './components/quiz';
import Videos from './components/videos';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
    <Signup />
    <Login />
    <Quiz />
    <Extra />
    <Videos />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
