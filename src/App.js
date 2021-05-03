
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouterMain from './routes/RouterMain';
import RouterAdmin from './routes/RouterAdmin';

const App = () => {
  return (
    <div className="App">
      <RouterMain />
      <RouterAdmin />
    </div >
  );
}
export default App;
