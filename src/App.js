import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from './pages/LoginForm';
import { StartSida } from './pages/StartSida';
import { NewUserForm } from './pages/NewUserForm';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<StartSida />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/newuser' element={<NewUserForm />} />
    </Routes>
    </>
  );
}

export default App;
