import React from 'react';
import Routes from './routes';
import './assets/styles/global.css';
import { UserProvider } from './hooks/ContextApi';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
