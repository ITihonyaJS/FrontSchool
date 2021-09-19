import React from 'react';

import Header from './components/Header';
import Partners from './components/Partners';
import Community from './components/Сommunity/index';
import Statistics from './components/Statistics';
import Skills from './components/Skills'
import Reviews from './components/Reviews'
import FormOfPayment from './components/FormOfPayment'
import PriceAndNews from './components/PriceAndNews'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
		<Partners/>
		<Community />
		<Statistics />
		<Skills />
		<Reviews/>
		<FormOfPayment/>
		<PriceAndNews/>
		<Footer/>
    </>
  );
}

export default App;
