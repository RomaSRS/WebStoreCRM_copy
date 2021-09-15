import React from 'react';
import Header from '../components/header';
import LocalizationBlock from '../components/LocalizationBlock';
import { Route } from 'react-router';
import Footer from 'src/components/Footer/Footer';
import ProductsBlock from 'src/components/ProductsBlock';
import SearchModal from 'src/components/searchModal';
import ProductPage from 'src/pages/ProductPage';
import SearchPage from 'src/pages/searchPage';
import './App.scss';



function App() {
  return (
    <div className="App">
      <Header />
      <LocalizationBlock />
      <ProductPage/>
      <Footer/>
    </div>

  );
}

export default App;
