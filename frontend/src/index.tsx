import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './auth';
import { RootProvider } from './store'

ReactDOM.render(
  <RootProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </RootProvider>,
  document.getElementById('root')
);
