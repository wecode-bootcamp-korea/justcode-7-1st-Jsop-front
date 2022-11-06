import React, { useState } from 'react';

import Footer from '../src/components/Footer/Footer';
import Router from './pages/Router';
function App() {
  const [pageOpen, setPageOpen] = useState(false);
  return (
    <div>
      {!pageOpen && <Router pageOpen={pageOpen} setPageOpen={setPageOpen} />}
      {pageOpen && <Footer />}
    </div>
  );
}

export default App;
