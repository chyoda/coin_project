import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Footer from './components/Footer'
import AppRoutesEMP from './Routes/AppRoutesEMP'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppRoutesEMP/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
