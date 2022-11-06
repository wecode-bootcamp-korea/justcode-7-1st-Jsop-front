import React from 'react';

import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Router from './pages/Router';
function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
