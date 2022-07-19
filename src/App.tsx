import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TrackRedirectLinks from './Components/TrackRedirectLinks';
import { apiConfig } from './Lib/Api/api-client';

import AppRoutes from './Lib/Routes/AppRoutes';

function App() {
  apiConfig();

  return (
    <div className='App'>
      <TrackRedirectLinks />
      <ToastContainer />
      <AppRoutes />
    </div>
  );
}

export default App;
