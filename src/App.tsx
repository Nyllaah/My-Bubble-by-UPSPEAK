import { Route, Routes } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import ToDoHome from './pages/ToDoHome';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/home" element={ <ToDoHome /> } />
    </Routes>
  );
}

export default App;
