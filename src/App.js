import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Certifique-se de definir o caminho correto
import AppRoutesCom from './AppRoutesCom';
import Extrato from './pages/EMP/Extrato';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppRoutesCom/>
      </div>
    </BrowserRouter>
  );
}

export default Extrato;
