import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/Signup';
import LogIn from './components/Login';
import UserContext from './Contexts/UserContext';
function App() {
  return (
    <UserContext.Provider value={{}}>
      <div className="App">
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/ads' element={<LogIn />} />
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
