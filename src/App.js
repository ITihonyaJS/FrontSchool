import React from 'react';

import Header from './components/Header';
import Partners from './components/Partners';
import Community from './components/Сommunity/index';
import Statistics from './components/Statistics';
import Slills from './components/Skills'
import Reviews from './components/Reviews'

function App() {
  return (
    <>
      <Header />
		<Partners/>
		<Community />
		<Statistics />
		{/* <Slills /> */}
		{/* <Reviews/> */}
    </>
  );
}

export default App;
