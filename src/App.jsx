import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/Signup';
import LogIn from './components/Login';
import UserContext from './Contexts/UserContext';
import { useState } from 'react';
import DisplayProducts from './components/DisplayProducts';
import MyAd from './components/MyAd';
import MySold from './components/MySold';
import MyFavs from './components/MyFavs';
import NewAd from './components/NewAd';

function App() {
  let [user, setUser] = useState({
    "_id": "62fdfc2f38e7df3d8075ea67",
    "name": "Ahindra",
    "email": "ahindra@mail.com",
    "password": "$2b$10$PTY6xBiHtc9dLnIoVZYBL.NFU5d30E0rRpsUM7cNq6ZbRXh2pGRPK",
    "ads": [
      "63034868a3bead749d531284",
      "62ff394d948fb9feaab7f0cd",
    ],
    "__v": 0,
    "createdAt": "2022-08-22T16:59:46.134Z"
  });
  let [ads, setAds] = useState(null);
  let [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmRmYzJmMzhlN2RmM2Q4MDc1ZWE2NyIsImVtYWlsIjoiYWhpbmRyYUBtYWlsLmNvbSIsImlhdCI6MTY2MTE4NzU4Nn0.xDwnCJrtnDUjYBe3thPovR3FcBWexd4Txwv7g3c5UAQ');

  return (
    <UserContext.Provider value={{ user, setUser, ads, setAds, token, setToken }}>
      <div className="App">
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/ads' element={<DisplayProducts />} />
          <Route path='/myads' element={<MyAd />} />
          <Route path='/myfavs' element={<MyFavs />} />
          <Route path='/mysold' element={<MySold />} />
          <Route path='/addnew' element={<NewAd/>} />
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
