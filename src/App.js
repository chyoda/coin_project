import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import AppRoutesCom from './AppRoutesCom';
<<<<<<< HEAD
import Extrato from './pages/EMP/Extrato';
=======
import Login from './pages/Login.js'
>>>>>>> 970fce1478c5f04befddfb2676b4c245b95d1097

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

<<<<<<< HEAD
export default Extrato;
=======
export default App;
>>>>>>> 970fce1478c5f04befddfb2676b4c245b95d1097
