import { Route, Routes } from 'react-router-dom';
import './App.css';

import RegistartionPage from './page/RegistartionPage/RegistartionPage';
import LoginPage from './page/LoginPage/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/reg' element={<RegistartionPage></RegistartionPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
