// import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          {/* <Route path="/" element={<Homepage/>}></Route> */}
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
