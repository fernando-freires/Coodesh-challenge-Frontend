import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import GlobalStyle from './globalStyles';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
