import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/Signup';
import LogIn from './components/Login';
import UserContext from './Contexts/UserContext';
import { useState } from 'react';
import DisplayProducts from './components/DisplayProducts';

function App() {
  let [user, setUser] = useState(null);
  let [ads, setAds] = useState(null);
  let [token, setToken] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, ads, setAds, token, setToken }}>
      <div className="App">
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/ads' element={<DisplayProducts />} />
          {/* <Route path='/inbox' element={<Inbox />} />
        <Route path='/inbox/:id' element={<Email />} />
        <Route path='/compose' element={<Compose />} />
        <Route path='*' element={<NoMatch />} /> */}
        </Routes>
      </div >
    </UserContext.Provider>
  );
}

export default App;
