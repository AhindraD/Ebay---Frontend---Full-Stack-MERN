import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/Signup';
import LogIn from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        {/* <Route path='/inbox' element={<Inbox />} />
        <Route path='/inbox/:id' element={<Email />} />
        <Route path='/compose' element={<Compose />} />
        <Route path='*' element={<NoMatch />} /> */}
      </Routes>
    </div >
  );
}

export default App;
