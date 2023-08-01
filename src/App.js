import './App.scss';
import React from 'react';
import Header from './components/Header';
import AllCategoriesPage from './features/AllCategoriesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <AllCategoriesPage />
    </div>
  );
}

export default App;
