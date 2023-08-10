import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Certifique-se de definir o caminho correto
import AppRoutesCom from './AppRoutesCom';
import Vender_Read_QRCODE from './pages/EMP/Vender_Read_QRCODE';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppRoutesCom/>
      </div>
    </BrowserRouter>
  );
}

export default Vender_Read_QRCODE;
