import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  // import './App.css';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
  );
}

export default App
