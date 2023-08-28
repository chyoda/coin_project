import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import AppRoutesCom from './AppRoutesCom';
import Footer from './components/Footer'
import CadCliente from './pages/COM/CadCliente'

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

export default CadCliente;
