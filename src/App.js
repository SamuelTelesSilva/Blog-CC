import React from 'react';
import {Router} from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import { AuthProvider } from './providers/auth.js'; 
import history from './history';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyles/>
    </AuthProvider>
  );
}

export default App;
