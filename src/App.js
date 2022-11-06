import React, { useState } from 'react';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Router from './pages/Router';
function App() {
  const [pageOpen, setPageOpen] = useState(true);
  return (
    <div>
      <Header setPageOpen={setPageOpen} />
      {pageOpen && <Router />}
      {pageOpen && <Footer />}
    </div>
  );
}

export default App;
