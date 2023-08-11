import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import AppRoutesCom from './AppRoutesCom';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppRoutesCom/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
