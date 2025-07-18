import './App.css';
import ImageGrid from './components/Game/MultiCursor';
// import Homepage from './pages/Homepage';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

import { Routes, Route /*, useLocation*/ } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

function App() {
  // const location = useLocation();
  // const isHomepage =
  //   location.pathname === '/' ||
  //   location.pathname === '/home' ||
  //   location.pathname === '/homepage';

  return (
    <AuthProvider>
      <div className="App">
        {/* {isHomepage ? (
          <header className="App-header">
            <Routes>
              <Route path="/home" element={<Homepage />} />
              <Route path="/homepage" element={<Homepage />} />
            </Routes>
          </header>
        ) : ( */}
        <Routes>
          <Route path="/" element={<ImageGrid />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
        {/* )} */}
      </div>
    </AuthProvider>
  );
}

export default App;




