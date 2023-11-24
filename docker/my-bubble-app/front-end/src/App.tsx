import { Route, Routes } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import ToDoHome from './pages/ToDoHome';
import Layout from './components/Layout';
import Memorize from './pages/Memorize';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={ <Layout /> }>
        <Route path="/home/:userId" element={ <ToDoHome /> } />
        <Route path="/memorize" element={ <Memorize /> } />
      </Route>
    </Routes>
  );
}

export default App;
