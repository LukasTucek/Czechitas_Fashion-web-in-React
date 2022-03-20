import React from 'react';
import { render } from 'react-dom';
import './style.css';
//import components
import Header from './components/Header/Header';
import Dresses from './components/Dresses/Dresses';
import Shoes from './components/Shoes/Shoes';
import Accessories from './components/Accessories/Accessories';
import Footer from './components/Footer/Footer';



const App = () => (
  <>
    <div className="container">
      <Header title="Móda" />
      <Dresses />
      <Shoes />
      <Accessories />
      <Footer year="2022" author="Czechitas" />
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
