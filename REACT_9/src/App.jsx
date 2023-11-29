import React from 'react';
import { AppProvider } from './context';
import Sidebar from './Sidebar';
import MainContent from './MainContent'; // Ваш основной компонент

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <Sidebar />
        <MainContent />
      </div>
    </AppProvider>
  );
};

export default App;
