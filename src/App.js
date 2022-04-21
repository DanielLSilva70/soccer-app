import './App.css'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
// import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Link className="links" to="/Home">Home</Link>
      <Link className="links" to="/Register" element={<Register/>}>Register</Link>
      <Link className="links" to="/Login">Login</Link>
      {/* <Link className="links" to="/Profile">Profile</Link> */}
      <Routes>
        <Route path="/Login" element ={<Login />} />
        <Route path="/Home" element ={<Content />} />
        <Route path="/Register" element ={<Register />} />
        {/* <Route path="/Profile" element ={<Profile />} /> */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
