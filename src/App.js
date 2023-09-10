/*
BOM DIA, BOA TARDE, BOA NOITE, BOA MADRUGADA, NÃO SEI
POR FAVOR, NÃO MEXA MAIS AQUI NESSE CÓDIGO 
A NÃO SER QUE SEJA DE EXTREMA NECESSIDADE E TUDO DEPENDA DISSO
ELE FUNCIONA, PORÉM COMO E DE QUE FORMA NÃO DEVE SE SER QUESTIONADO
*/

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Footer from './components/Footer'
import AppRoutesEMP from './Routes/AppRoutesEMP'
import AppRoutesCOM from './Routes/AppRoutesCOM'
import AppRoutesADM from './Routes/AppRoutesADM';

function App() {
  const [showADM, setShowADM] = useState(true);
  const [showCOM, setShowCOM] = useState(true);
  const [showEMP, setShowEMP] = useState(true);

  const toggleComponent = (component) => {
    switch (component) {
      case 'ADM':
        setShowADM(!showADM);
        break;
      case 'COM':
        setShowCOM(!showCOM);
        break;
      case 'EMP':
        setShowEMP(!showEMP);
        break;
      default:
        break;
    }
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <button onClick={() => toggleComponent('ADM')}>
          {showADM ? 'Desativar ADM' : 'Ativar ADM'}
        </button>
        <button onClick={() => toggleComponent('COM')}>
          {showCOM ? 'Desativar COM' : 'Ativar COM'}
        </button>
        <button onClick={() => toggleComponent('EMP')}>
          {showEMP ? 'Desativar EMP' : 'Ativar EMP'}
        </button>

        {showADM && <AppRoutesADM />}
        {showCOM && <AppRoutesCOM />}
        {showEMP && <AppRoutesEMP />}
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;