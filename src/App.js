import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import AppRoutesCom from './AppRoutesCom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppRoutesCom/>
      </div>
    </BrowserRouter>
  );
}

export default App;
