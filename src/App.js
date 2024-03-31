import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import AccountPage from './page/AccountPage';

function App() {

  return (
    <div className='main-wrapper'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/account' element={<AccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
