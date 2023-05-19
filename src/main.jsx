import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Header from './components/Header/header'
import './index.css';
import About from './components/About/about'
import Mid from './components/Mid/mid';
import Logo from './components/Logo/logo';
import Line from './components/Line/line';
import Sale from './components/Sale/sale';
 import Blog from './components/Blog/blog';
  import Testi from './components/Testi/test'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <Logo/>
    <Mid/>
    <About/>
    <Line/>
    <Blog/>
    <Sale/>
    <Testi/>
  </React.StrictMode>,
)
