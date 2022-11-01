import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from './pages/LoginForm';
import { StartSida } from './pages/StartSida';
import { useState } from 'react';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<StartSida />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/bonk' element={<p>BONK!</p>} />
      <Route path='/bink' element={<p>BINK!!</p>} />
      <Route path='/bunk' element={<p>BUNK!!!</p>} />
    </Routes>
    </>
  );
}

export default App;
