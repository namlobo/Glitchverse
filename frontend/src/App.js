import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isHomepage = location.pathname === '/homepage';

  return (
    <div className="App">
      {isHomepage ? (
        <header className="App-header">
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </header>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

