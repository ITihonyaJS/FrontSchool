import React from 'react';

import Header from './components/Header';
import Partners from './components/Partners';
import Community from './components/Сommunity/index';
import Statistics from './components/Statistics';

function App() {
  return (
    <>
      <Header />
		<Partners/>
		<Community />
		<Statistics />
    </>
  );
}

export default App;
