// import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
