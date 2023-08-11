import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import AppRoutesCom from './AppRoutesCom';
import Login from './pages/Login.js'
import CadCliente from './pages/COM/CadCliente';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <AppRoutesCom/> */}
        <Login/>
      </div>
    </BrowserRouter>
  );
}

export default CadCliente;
